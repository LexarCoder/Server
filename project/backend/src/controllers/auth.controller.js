const userModel = require("../model/instaUser.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")





// ===== Register User =====

async function registerController(req, res) {

    // Get user data
    const {
        username,
        email,
        password,
        bio,
        profileImage
    } = req.body


    // Check existing user
    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })



    // User already exists
    if (isUserAlreadyExists) {

        return res.status(409).json({
            message:
                "User already exists " +
                (
                    isUserAlreadyExists.email == email
                        ? "Email already exists"
                        : "Username already exists"
                )
        })
    }



    // Hash password
    const hashPassword = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex")

    // Create user
    const userCreate = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password: hashPassword,
    })



    // Create JWT token

    const jwtToken = jwt.sign({
        id: userCreate._id
    },
        process.env.JWT_SECRET, { expiresIn: "1d" }
    )

    res.cookie("Token", jwtToken)

    res.status(201).json({
        message: "User Registered Successfully...",
        userCreate: {
            username: userCreate.username,
            email: userCreate.email,
            bio: userCreate.bio,
            profileImage: userCreate.profileImage
        }
    })

}


// ===== Login User =====

async function loginController(req, res) {
    const { username, email, password } = req.body

    const userLogin = await userModel.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            }
        ]
    })


    if (!userLogin) {
        return res.status(404).json({
            message: "User Not Found..."
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest('hex')

    const isPasswordExists = hash === userLogin.password


    if (!isPasswordExists) {
        return res.status(401).json({
            message: "Password invailed..."
        })
    }

    const token = jwt.sign({
        id: userLogin._id
    },
        process.env.JWT_SECRET, { expiresIn: "1h" })


    res.cookie("Token", token)

    res.status(200).json({
        message: "User login successfully",

        userLogin: {
            username: userLogin.username,
            email: userLogin.email,
            bio: userLogin.bio,
            profileImage: userLogin.profileImage
        }
    })


}


module.exports =  {
    registerController,
    loginController
}