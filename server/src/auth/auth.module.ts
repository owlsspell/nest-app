import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([User]),
    ConfigModule,
    {
      ...JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          secret: configService.get<string>('secret_key'),
        }),
        inject: [ConfigService],
      }),
      global: true,
    },
  ],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
