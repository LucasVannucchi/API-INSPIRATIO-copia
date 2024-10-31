import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/entities/user.entity';
import { UserService } from './speciality.service';
import { UsersController } from './speciality.controller';
import { UsersRepository } from './speciality.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UserService, UsersRepository],
  controllers: [UsersController],
  exports: [UserService],
})
export class UsersModule {}
