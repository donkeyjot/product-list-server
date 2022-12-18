import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
    imports: [
        ProductsModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'productsDb',
            autoLoadEntities: true,
            synchronize: true,
            entities: [Product],
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
