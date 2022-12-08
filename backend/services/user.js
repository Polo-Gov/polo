const db = require("../models/index");
const bcrypt = require("bcryptjs");

class user {
  constructor() {
    this.db = db.users;
  }
  async createUser(name, email, pass) {
    const User = await this.db;
    //hash password
    if (!pass) {
      throw new Error("Password is required");
    }
    const hashedPassWord = await bcrypt.hash(pass, 8);
    pass = hashedPassWord;

    //verifica se o email já existe
    const userExists = await User.findOne({
      where: {
        email: email,
      },
    });
    if (userExists) {
      throw new Error("User already exists");
    }

    const insertions = await db.users.create({
      name: name,
      email: email,
      pass: pass,
    });

    if (insertions._options.isNewRecord) {
      throw new Error("Error creating user");
    }

    return { messsage: "User created	successfully" };
  }

  //authenticate user
  async authenticateUser(email, pass) {
    const User = await this.db;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    if (!(await bcrypt.compare(pass, user.pass))) {
      return res.status(400).json({ error: "Invalid password" });
    }

    token = jwt.sign(
      {
        email: user.email,
      },
      "4b0d30a9f642b3bfff67d0b5b28371a9",
      {
        subject: user._id.toString(),
        expiresIn: "1h",
      }
    );

    return {
      message: "Validated Credentials. User Logged",
      token: token,
    };
  }
}

module.exports = { user };
