import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/entities/user.entity';
import { SpecialityService } from './speciality.service';
import { SpecialityController } from './speciality.controller';
import { SpecialityRepository } from './speciality.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Speciality', schema: UserSchema }])],
  providers: [SpecialityService, SpecialityRepository],
  controllers: [SpecialityController],
  exports: [SpecialityService],
})
export class UsersModule {}
