import { Controller, Body, Post, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController {

    constructor(private readonly service: UserService) { }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(":id")
    async findById(@Param() id: number) { 
        return this.service.findById(id);
    }

    @Post()
    async create(@Body() user) {
        return await this.service.create(user);
    }
}