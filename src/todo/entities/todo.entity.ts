import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity() // Decorador que indica que esta clase es una entidad.
export class Todo {
  @PrimaryGeneratedColumn() // Columna primaria autogenerada.
  id: number;

  @Column() // Título de la tarea.
  title: string;

  @Column() // Descripción de la tarea (ahora es obligatoria).
  description: string;

  @Column({ default: false }) // Estado de la tarea (false por defecto).
  completed: boolean;

  @Column('int') // Estimación de tiempo en horas.
  timeEstimation: number;

  @Column('int') // Prioridad según la matriz de Eisenhower.
  priority: number;

  @CreateDateColumn() // Fecha de creación (autogenerada).
  createdAt: Date;

  @UpdateDateColumn() // Fecha de última actualización (autogenerada).
  updatedAt: Date;
}
