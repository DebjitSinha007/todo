const mongoose = require("mongoose");

const conn = async(req, res) => {
    try {
        await mongoose.connect(
            "mongodb+srv://user:user1234@cluster0.2kcbwgj.mongodb.net/"
        )
            .then(() => {
            console.log("connected.....")
        })
    } catch (error) {
        res.status(400).json({
            msg: "Not connected"
        })
        
    }
}
conn() 