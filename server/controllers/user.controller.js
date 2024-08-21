import userModel from "../models/user.model";
import responseHandler from "../handlers/response.handler";
import jsonwebtoken from "jsonwebtoken";

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const checkUser = await userModel.findOne({ username });
        if (checkUser) {
            return responseHandler.badRequest(res, "Username already exists");
        }
        else {
            const user = new userModel({ username, email });
            user.setPassword(password);
            await user.save();
            const token = jsonwebtoken.sign({ data: user._id }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
            return responseHandler.created(res, { token, ...user._doc, id: user._id });
        }
    } catch (error) {
        return responseHandler.error(res);
    }
}

const signin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username }).select("username password salt id email");
        if (!user) {
            return responseHandler.notFound(res, "User not found");
        }
        if (!user.validPassword(password)) {
            return responseHandler.unauthorized(res, "Invalid password");
        }
        const token = jsonwebtoken.sign({ data: user._id }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
        user.password = undefined;
        user.salt = undefined;
        responseHandler.success(res, { token, ...user._doc });
    } catch{
        responseHandler.error(res);
    }
};

const updatePassword = async (req, res) => {
    try {
        const { password, newPassword } = req.body;
        const user = await userModel.findById(req.user.id).select("password id salt");
        if (!user) {
            return responseHandler.badRequest(res, "User not found");
        }
        if (!user.validPassword(password)) {
            return responseHandler.badRequest(res, "Invalid password");
        }
        user.setPassword(newPassword);
        await user.save();
        responseHandler.ok(res, "Password updated successfully");
    } catch {
        responseHandler.error(res);
    }
};

const getInfo = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id);
        if (!user) {
            return responseHandler.notFound(res, "User not found");
        }
        responseHandler.ok(res, user);}
    catch {
        responseHandler.error(res);
    }
}

export default {
    signup,
    signin,
    updatePassword,
    getInfo
}