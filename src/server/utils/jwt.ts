import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export function generateToken(user: { id: string; email: string }) {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1m",
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
