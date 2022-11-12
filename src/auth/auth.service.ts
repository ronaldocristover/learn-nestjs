import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
@Injectable({})
export class AuthService {
  constructor(){}

  signup(dto: AuthDto) {
    return {
      msg: dto,
    };
  }

  signin() {
    return {
      msg: 'I have signin',
    };
  }
}
