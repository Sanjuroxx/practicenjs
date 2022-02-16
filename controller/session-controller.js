const res = require("express/lib/response")
const fs=require("fs")


function login(req,res)
{   let loginhtml = fs.readFileSync("./controller/views/login.html")
    res.write(loginhtml)
    res.end()
}
function signup(req,res)
{   let signupHtml =fs.readFileSync("./controller/views/signup.html")
    res.write(signupHtml)
    res.end()
}

function saveuser(req,res)
{console.log(req.body)

    res.json({
        msg:"done danadone....",
        status:200,
        data:req.body
    })


}
module.exports.login = login
module.exports.signup=signup
module.exports.saveuser=saveuser
