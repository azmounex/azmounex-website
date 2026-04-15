import jwt from "jsonwebtoken";

function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Admin token is required" });
  }

  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is not configured");
    }

    req.user = jwt.verify(token, secret);
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired admin token" });
  }
}

export { requireAdmin };