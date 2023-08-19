const { userService } = require("../services");

// create user
const createUser = async (req,res) => {
    try {
        const reqBody = req;
        console.log(reqBody, '----');

        // const user = await userService.createUser(reqBody);

        // res.status(200).json({
        //     success: true,
        //     message: "User create successfully!",
        //     data: { user }
        // });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

//  Get user list
const getUserList = async(req, res) => {
    try {

        const getList = await userService.getUserList(reqBody);

        res.status(200).json({
            success: true,
            message: "Get user list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

module.exports = {
    createUser,
    getUserList
};