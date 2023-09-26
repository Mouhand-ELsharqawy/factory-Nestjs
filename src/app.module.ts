import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerModule } from './workers/worker.module';
import { WarehouseModule } from './ware house/warehouse.module';
import { VisitorModule } from './visitors/visitor.module';
import { RawModule } from './raw matrial/raw.module';
import { ProductModule } from './products/product.module';
import { MachineModule } from './machine/machine.module';
import { DepartmentModule } from './department/department.module';
import { customerModule } from './customers/customer.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mohand800001:u7RRxaBSjh1bDjaG@cluster0.5gesuqe.mongodb.net/crud'),
    WorkerModule,
    WarehouseModule,
    VisitorModule,
    RawModule,
    ProductModule,
    MachineModule,
    DepartmentModule,
    customerModule
  ]
})
export class AppModule {}
