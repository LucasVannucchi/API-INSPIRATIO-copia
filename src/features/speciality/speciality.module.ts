import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialityService } from './speciality.service';
import { SpecialityController } from './speciality.controller';
import { SpecialityRepository } from './speciality.repository';
import { specialitySchema } from 'src/entities/speciality.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Speciality', schema: specialitySchema}])],
  providers: [SpecialityService, SpecialityRepository],
  controllers: [SpecialityController],
  exports: [SpecialityService],
})
export class SpecialityModule {}
