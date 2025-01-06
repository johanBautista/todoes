import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  private todos = [
    { id: 1, title: 'Aprender NestJS', completed: false },
    { id: 2, title: 'Crear una API REST', completed: true },
  ];

  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo' + createTodoDto;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo: ${updateTodoDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
