import { Request } from 'express';
import { User } from '../user/entities/user.entity';

export interface AuthenticatedRequest extends Request {
  user: User;
}

export interface JwtPayload {
  username: string;
  password: string;
  sub: number;
}
