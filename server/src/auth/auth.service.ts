import {
  ConflictException,
  Injectable,
  Redirect,
  UnauthorizedException,
} from '@nestjs/common';
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

  async googleLogin(req, res) {
    console.log('req.user', req.user);

    if (!req.user) {
      return res.redirect(
        process.env.FRONTEND_API + new URLSearchParams({ user: null }),
      );
    }

    const existUser = await this.usersRepository.findOneBy({
      email: req.user.data.email,
    });

    if (!existUser) {
      const { firstName, ...data } = req.user.data;
      try {
        await this.usersRepository.save({
          ...data,
          username: firstName,
          password: null,
          isActive: true,
        });
        return this.googleLogin(req, res);
        // res.redirect(
        //   process.env.FRONTEND_API +
        //     '/profile?' +
        //     new URLSearchParams({
        //       email: data.email,
        //       access_token: req.user.access_token,
        //     }),
        // );
      } catch (e) {
        console.log(e);
        return new UnauthorizedException();
      }
    }
    console.log('existUser', existUser);
    const { password: userPassword, ...data } = existUser;
    const access_token = await this.jwtService.signAsync(data);

    return res.redirect(
      process.env.FRONTEND_API +
        '/sign_in_google?' +
        new URLSearchParams({
          data: JSON.stringify(data),
          access_token,
        }),
    );
    // res.redirect(pathname + urlParameters)
    // @Redirect({url:link})

    // if (!req.user) {
    //   return 'No user from google';
    // }

    // return {
    //   message: 'User information from google',
    //   user: req.user,
    // };
  }
}
