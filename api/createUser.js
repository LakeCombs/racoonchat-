import axios from "axios";

const createUser = async (req, res) => {
  const { userId, userName } = req.body;
  axios
    .post(
      "https://api.chatengine.io/projects/racoon/",
      { username: userName, secret: userId },
      {
        headers: {
          "Private-Key": process.env.chat_engine_private_key,
        },
      }
    )
    .then((apiRes) => {
      res.json({
        body: apiRes.body,
        error: null,
      });
    })
    .catch(() => {
      res.json({
        body: null,
        error: "there was a error creating the user",
      });
    });
};

export default createUser;
