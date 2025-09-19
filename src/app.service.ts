import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource
  ) { }

  async seed() {

    await this.dataSource.transaction(async (db) =>{
      const ceo = db.create(Employee, {
        name: 'Mr. CEO'
      })

      await db.save(ceo);
    })

  }
}
