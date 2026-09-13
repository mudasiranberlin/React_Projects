import {asyncHandler} from "../utils/AsyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"
import {UploadOnCloudinary} from "../utils/cloudinary.js"

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
    const coverImageLocalPath = req.files?.coverImage[0]?.path

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
        username:username.tolowerCase()
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




export {registerUser}