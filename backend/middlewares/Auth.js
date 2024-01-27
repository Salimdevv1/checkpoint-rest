const jwt = require('jsonwebtoken');
const user = require("../models/user")
const protect =async (req, res, next) =>{
    const token = req.headers.authorization?.split(" ")[1]
    if (req.headers.authorization && req.headers.authorization.startWith('Bearer ')){
        try {
            const decoded = jwt.verify(token , process.env.JWT)
            console.log(decoded)
        } catch (error) {
            
        }
    }
}
module.exports = protect ; 