import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [{ id: 0, name: 'mohamad' }];

  findAll(): any {
    return this.users;
  }

  findById(userId: number): any {
    return this.users.find((user) => user.id === userId);
  }

  createUser(name: string): any {
    const newUser = { id: Date.now(), name };
    this.users.push(newUser);

    return this.users;
  }
}
