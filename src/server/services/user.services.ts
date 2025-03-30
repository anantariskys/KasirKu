import { userRepository } from "../repositories/user.repository";
import { User } from "../types/user.types";

class UserService {
  async createUser(user: User) {
    return userRepository.create(user);
  }

  async getUserById(id: string) {
    return userRepository.findById(id);
  }

  async getUserByEmail(email: string) {
    return userRepository.findByEmail(email);
  }

  async getUserByUsername(username: string) {
    return userRepository.findByUsername(username);
  }

  async updateUser(id: string, user: User) {
    return userRepository.update(id, user);
  }

  async deleteUser(id: string) {
    return userRepository.delete(id);
  }
}

const userService = new UserService();
export default userService;
