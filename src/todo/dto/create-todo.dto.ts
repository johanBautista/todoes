import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(1) // Mínimo 1 hora.
  timeEstimation: number;

  @IsInt()
  @Min(1) // Prioridad mínima: 1.
  @Max(4) // Prioridad máxima: 4.
  priority: number;
}
