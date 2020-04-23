import { Controller, Body, Post, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController {

    constructor(private readonly service : UserService){}

    @Get()
    async findAll(){
        return await this.service.findAll();
    }

    @Post()
    async create(@Body() user){
        return await this.service.create(user);
    }
}