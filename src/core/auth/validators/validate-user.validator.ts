import { User } from 'src/types/User';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HmacSHA512 } from 'crypto-js';
import { UserService } from 'src/features/users/users.service';
import { Admin } from 'src/types/admin';
import { Roles } from 'src/types/Roles';

@Injectable()
export class UserValidator {
  constructor(private readonly usersService: UserService) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user: User | undefined = await this.usersService.findByEmail(email);

    if (!user) {
      throw new HttpException(
        { message: 'User not found' },
        HttpStatus.NOT_FOUND,
      );
    }

    const hashPassword: string = HmacSHA512(
      password,
      process.env.PASSWORD_SALT,
    ).toString();

    if (hashPassword !== user.password) {
      throw new HttpException(
        { message: 'Invalid password' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (user.roles.includes(Roles.ADMIN)){
      return user;
    }

    return user;
  }


  

}
