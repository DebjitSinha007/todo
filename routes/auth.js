const router = require("express").Router();
const User = require("../models/user")
const bcrypt = require("bcryptjs")

//SIGN UP

router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashpassword = bcrypt.hashSync(password)
        const user = new User({ email, username, password: hashpassword })
        await user.save().then(() => res.status(200).json({msg: "Sign Up Sucessful"}))
    } catch (error) {
        console.log(error)
        res.status(200).json({ msg : "user already exists"})
        
    }
})

// SIGN IN
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400).json({msg: "please Sign up frist"})
        }

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password , user.password
        )
        if (!isPasswordCorrect) {
            res.status(400).json({msg: "password is not currect"})
        }
        const { password, ...others } = user._doc;
         res.status(200).json({ others })

    } catch (error) {
        console.log(error)
        res.status(400).json({ msg : "user already exists"})
        
    }
})



module.exports = router;