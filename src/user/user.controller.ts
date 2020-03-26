import { Controller, Body, Post, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController {

    private userService : UserService = new UserService();

    @Get()
    async findAll(){
        return await this.userService.findAll();
    }

    @Post()
    async create(@Body() user){
        return await this.userService.create(user);
    }
}