import User from "../schemas/UserSchema.js";

export const Signup = async (req, res) => {
  try {
    const previousUser = await User.findOne({ email: req.body.email });

    if (previousUser) {
      return res
        .status(400)
        .json({ message: "A user with that email already exists." });
    }

    const newUser = new User({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save(); // Save the new user to the database

    return res
      .status(201)
      .json({ message: "User created successfully.", user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const Login = () => {
  return res.status(500).json({ message: "Internal server error." });
};
