import { userRepository } from "../user/repository";
import { User } from "../types/user.types";
import { generateToken } from "../utils/jwt";
import { hashPassword, verifyPassword } from "../utils/password";

class AuthService {
  async register(user: User) {
    const existingUser = await userRepository.findByUsername(user.username);
    if (existingUser) {
      throw new Error("User already exists");
    }
    user.password = await hashPassword(user.password);
    return userRepository.create(user);
  }
  async login(email: string, password: string) {
    const existingUser = await userRepository.findByEmail(email);

    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    if (!existingUser) {
      throw new Error("User not found");
    }
    const isPasswordValid = await verifyPassword(
      password,
      existingUser.password,
    );
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    const token = await generateToken(existingUser);
    return { user: existingUser, token };
  }
}

const authService = new AuthService();
export default authService;
