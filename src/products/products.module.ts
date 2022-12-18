import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ProductsRepository } from './products.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
