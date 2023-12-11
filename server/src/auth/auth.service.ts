import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    try {
      const user = await this.usersRepository.findOneBy({ email });
      console.log('user', user);
      if (!user || !password)
        throw new UnauthorizedException('Wrong email or password');
      const result = await bcrypt.compare(password, user.password);

      if (!result) return new UnauthorizedException('Wrong password');
      const { password: userPassword, ...data } = user;
      const access_token = await this.jwtService.signAsync(data);
      return { data, access_token };
    } catch (e) {
      return new UnauthorizedException({
        message: 'Something went wrong',
        err: e,
      });
    }
  }
}
