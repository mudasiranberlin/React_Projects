import {asyncHandler} from "../utils/AsyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"
import {UploadOnCloudinary} from "../utils/cloudinary.js"


const generateAccessAndRefreshToken = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken=refreshToken
        user.save({validateBeforeSave:false})

        return {accessToken,refreshToken}
        
    } catch (error) {
        throw new ApiError(500,"Something went wrong Generating the access and refresh token ")
    }
}

const registerUser = asyncHandler(async (req,res) => {
    const {username,password,fullName,email} = req.body
    if ([fullName,email,password,username].some((feild)=>{feild?.trim() ===""})) {
        throw new ApiError(400,"All feilds are Required")
    }
    const existedUser= User.findOne({
        $or:[{username},{email}]
    })

    if (!existedUser) {
         throw new ApiError(409,"User already Existed")
    }
    const avatarLocalPath= req.files?.avatar[0]?.path
    // const coverImageLocalPath = req.files?.coverImage[0]?.path

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length>0) {
        coverImageLocalPath = req.files.coverImage[0].path
        
    }
    if (!avatarLocalPath) {
         throw new ApiError(400,"Avatar file is Required")
    }
    const avatar= await UploadOnCloudinary(avatarLocalPath)
    const coverImage= await UploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400,"Avatar file is Required")
    }
    
    const user = await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url ||"",
        email,
        password,
        username:username.toLowerCase()
    })

    const createdUser= await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createdUser) {
         throw new ApiError(500,"Something went wrong while creting the user")
    }

    return res.status(200).json(
        new ApiResponse(200,createdUser,"User registred Sucessfully")
    )
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    // User must provide username or email
    if (!(username || email)) {
        throw new ApiError(400, "Please enter the username or email");
    }

    // Password is required
    if (!password) {
        throw new ApiError(400, "Please enter the password");
    }

    // Find user using username OR email
    const user = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

    console.log("user:", user);

    // Compare entered password with hashed password
    const isPasswordValid = await user.isPasswordCorrect(password);

    console.log("password valid:", isPasswordValid);

    // if (!isPasswordValid) {
    //     throw new ApiError(401, "Password incorrect");
    // }

    // Generate tokens
    const { accessToken, refreshToken } =
        await generateAccessAndRefreshToken(user._id);

    // Remove sensitive fields
    const loggedInUser = await User.findById(user._id)
        .select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                },
                "User logged in successfully"
            )
        );
});

const logoutUser = asyncHandler(async (req,res) => {
    await User.findById(
        req.user._id,{
        $set:{
            refreshToken:undefined
        }
    },
    {
        new:true
    }
    )
    const options= {
        httpOnly:true,
        secure:true
    }
    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200,{},"User Logged Out"))
})



export {
    registerUser,
    loginUser,
    logoutUser

}