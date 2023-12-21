import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  Body,
} from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
const saltRounds = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    // private configService: ConfigService,
  ) {}

  async create(
    @Body()
    createUserDto: CreateUserDto,
  ): Promise<{ status: string; email?: string } | UnauthorizedException> {
    console.log('createUserDto', createUserDto);
    const { email, password } = createUserDto;

    const user = await this.usersRepository.findOneBy({ email });
    if (user) return new ConflictException('User already exists');
    if (!password) return { status: 'need password' };
    const hash = await bcrypt.hash(password, saltRounds);
    try {
      await this.usersRepository.save({
        ...createUserDto,
        password: hash,
        isActive: true,
      });
      return { status: 'success', email };
    } catch (e) {
      console.log(e);
      return new UnauthorizedException();
    }
  }
  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find();
    const filteredUsers = users.map((user) => {
      const { password, ...data } = user;
      return data;
    });
    return filteredUsers;
  }
  async findOne(id: number): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ id });
    const { password, ...data } = user;
    return data;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }
  async remove(id: number): Promise<string> {
    await this.usersRepository.delete(id);
    return `This action removes a #${id} user`;
  }
}
