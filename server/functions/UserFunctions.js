import User from "../schemas/UserSchema.js";

export const FetchProfile = async (req, res) => {
  // search db for user
  await User.findOne({ username: req.body.username }).then((user) => {
    if (user) {
      return res.status(200).json({
        user: {
          username: user.username,
          name: user.name,
          email: user.email,
          bio: user.bio,
          followers: user.followers,
          following: user.following,
        },
      });
    } else {
      return res.status(400).json({ message: "Unable to find Account." });
    }
  });
  // if user is found, return their info e.g username, bio, profile pic, threads
  // error if no user is found
};

export default FetchProfile;
