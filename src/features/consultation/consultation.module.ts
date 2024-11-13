import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/entities/user.entity';
import { ConsultationService } from './consultation.service';
import { ConsultationController } from './consultation.controller';
import { ConsultationRepository } from './consultation.repository';
import { consultationSchema } from 'src/entities/consultations.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Consultation', schema: consultationSchema }])],
  providers: [ConsultationService, ConsultationRepository],
  controllers: [ConsultationController],
  exports: [ConsultationService],
})
export class ConsultationModule {}
