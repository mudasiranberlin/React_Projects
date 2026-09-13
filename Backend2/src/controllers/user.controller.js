import {asyncHandler} from "../utils/AsyncHandler.js"

const registerUser = asyncHandler(async (req,res) => {
    const {username,password,fullName,email} = req.body
    console.log(username,password,fullName,email);
})

export {registerUser}