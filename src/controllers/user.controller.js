const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.list = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch(err) {
    console.log(err);
    read.status(400).json({ message: err?.message})
  }
};

exports.create = async (req, res) => {
  try{
    const user = req.body;
    const salt = process.env.salt;
    user.password = await bcrypt.hash(user.password, salt);
    await User.create(user);
    res.status(200).json({ success: true });
  } catch(err) {
    console.log(err)
    res.status(400).json({ message: err?.message });
  }
};

exports.update = async (req, res) => {
  try {
    await User.updateOne({_id: req.params.id}, req.body);
    res.status(200).json({ success: true });
  } catch(err) {
    console.log(err);
    res.status(400).json({ message: err?.message });
  }
}

exports.erase = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true });
  } catch(err) {
    console.log(err);
    res.status(400).json({ message: err?.message });
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if(user == null) {
      return res.status(400).json({ message: "User not found"});
    }
    let isMatch = await bcrypt.compare(req.body.password, user.password);
    if(!isMatch) {
      return res.status(400).json({ message: "Password is wrong"});
    } else {
      jwt.sign(
        {
          user: {
            _id: user._id,
            userName: user.userName,
          },
        },
        process.env.salt,
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err?.message });
  }

}
