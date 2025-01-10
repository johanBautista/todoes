import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthenticatedRequest } from 'src/auth/interfaces/authenticated-request.interface';

@Controller('profile')
export class ProfileController {
  @UseGuards(JwtAuthGuard) // Protege esta ruta con JWT.
  @Get()
  getProfile(@Request() req: AuthenticatedRequest) {
    return req.user; // Devuelve la información del usuario autenticado.
  }
}
