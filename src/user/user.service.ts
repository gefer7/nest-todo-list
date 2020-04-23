import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {

    private readonly users: User[] = [];

    async create(user: User) {
        this.users.push(user);
    }

    async findAll() {
        return this.users;
    }
}