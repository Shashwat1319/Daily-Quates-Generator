import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User Already exists" });
    }
    await User.create({ name, email, password: hashPassword });
     return res.status(201).json({
      message: "User Registered",
    });
  } catch (error) {
    console.log("Error : ",error.message)
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All field are required!!" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("Invalid credential");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "email or password are wrong",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

    return res.status(200).json({
      message: "Login Successfully",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
        message:"Inernal Server Error !!"
    })
  }
};
