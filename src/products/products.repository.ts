import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';

@Injectable()
export class ProductsRepository extends Repository<Product> {
    constructor(private dataSource: DataSource) {
        super(Product, dataSource.createEntityManager());
    }

    async getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
        const { name } = filterDto;
        const query = this.createQueryBuilder('product');

        if (name) {
            query.andWhere('LOWER(product.title) LIKE LOWER(:name)', {
                name: `%${name}$`,
            });
        }

        return query.getMany();
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        const { name, price, image } = createProductDto;
        const product = this.create({
            quantity: 1,
            name,
            price,
            image,
        });

        await this.save(product);

        return product;
    }
}
