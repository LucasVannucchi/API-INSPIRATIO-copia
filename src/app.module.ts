import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { DatabaseConnectionService } from './database/connection.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './features/users/users.module';
import { AuthModule } from './core/auth/auth.module';
import { MailsModule } from './features/mails/mails.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { SpecialityModule } from './features/speciality/speciality.module';
import { ConsultationModule } from './features/consultation/consultation.module';
import { FunctionalIndependencyMetricsModule } from './features/functionalIndependencyMetrics/functionalIndependencyMetrics.module';
import { childhoodAutismRatingScaleModule } from './features/childhoodAutismRatingScale/childhoodAutismRatingScale.module';
import { ModifiedChecklistForAutismInToddlersModule } from './features/modifiedChecklistForAutismInToddlers/modifiedChecklistForAutismInToddlers.module';
import { ChecklistBehaviorAutisticModule } from './features/checklistBehaviorAutistic/checklistBehaviorAutistic.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [DatabaseModule],
      useFactory: (database: DatabaseConnectionService) => {
        try {
          console.log('Tentando conectar ao MongoDB...');
          const mongoUri = database.get();
          console.log('Conectado ao MongoDB Atlas com sucesso!');
          return <MongooseModuleOptions>{
            uri: mongoUri,
          };
        } catch (error) {
          console.error('Erro ao conectar ao MongoDB:', error);
          throw error;
        }
      },
      inject: [DatabaseConnectionService],
    }),

    // envio de email
    MailerModule.forRootAsync({
      useFactory: () => ({
        //Mailtrap's user and password
        transport: {
          host: 'codeinnove@gmail.com',
          port: 465,
          auth: {
            user: process.env.MAIL_LOGIN,
            pass: process.env.MAIL_PASS,
          },
        },
        template: {
          dir: './src/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),

    AuthModule,
    UsersModule,
    MailsModule,
    SpecialityModule,
    ConsultationModule,
    FunctionalIndependencyMetricsModule,
    childhoodAutismRatingScaleModule,
    ModifiedChecklistForAutismInToddlersModule,
    ChecklistBehaviorAutisticModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}