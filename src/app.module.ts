import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './address/address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'nest-todo-list',
      entities: [
        User,
        Address
      ],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      User,
      Address
    ])
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService
  ],
})
export class AppModule {}
