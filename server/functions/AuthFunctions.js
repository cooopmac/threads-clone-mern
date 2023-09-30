import User from "../schemas/UserSchema.js";
import {
  hashPassword,
  createToken,
  passwordMatch,
} from "../middleware/Encrypt.js";
import validator from "validator";

export const Signup = async (req, res) => {
  //validate
  if (!req.body.email || !req.body.password) {
    return res.status(500).json({ message: "Fill in all fields." });
  }

  if (!validator.isEmail(req.body.email)) {
    return res.status(500).json({ message: "Enter a valid email." });
  }

  try {
    const previousUser = await User.findOne({ email: req.body.email });

    if (previousUser) {
      return res
        .status(400)
        .json({ message: "A user with that email already exists." });
    }

    const hashedPassword = await hashPassword(req.body.password);

    const newUser = new User({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save(); // Save the new user to the database

    const token = createToken(newUser._id);

    return res
      .status(201)
      .json({ message: "User created successfully.", token: token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const Login = async (req, res) => {
  //validate
  if (!req.body.email || !req.body.password) {
    return res.status(500).json({ message: "Fill in all fields." });
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "Incorrect email." });
    }

    const match = await passwordMatch(req.body.password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Incorrect password." });
    }

    const token = createToken(user._id);

    return res.status(201).json({
      message: "User logged in successfully.",
      email: user.email,
      token: token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
