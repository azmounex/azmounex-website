import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function loginAdmin(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const adminUsername = process.env.ADMIN_USERNAME || "admin";
  const plainPassword = process.env.ADMIN_PASSWORD || "admin123";
  const passwordHash = process.env.ADMIN_PASSWORD_HASH || "";

  let passwordMatches = false;

  if (passwordHash) {
    passwordMatches = await bcrypt.compare(password, passwordHash);
  } else {
    passwordMatches = password === plainPassword;
  }

  if (username !== adminUsername || !passwordMatches) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).json({ message: "JWT_SECRET is not configured" });
  }

  const token = jwt.sign({ username, role: "admin" }, secret, { expiresIn: "7d" });

  return res.json({
    token,
    admin: {
      username,
      role: "admin",
    },
  });
}

export { loginAdmin };