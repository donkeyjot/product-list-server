import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(
    private productRepository: ProductsRepository,
    ) {}

    getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
        return this.productRepository.getProducts(filterDto);
    }

    createProduct(createProductDto: CreateProductDto): Promise<Product> {
        return this.productRepository.createProduct(createProductDto);
    }

    //
    async getProductById(id: string): Promise<Product> {
        const found = this.productRepository.findOneBy({ id });

        if (!found) {
            throw new NotFoundException(`Task with id "${id} not found.`);
        }

        return found;
    }

    async deleteProductById(id: string): Promise<void> {
        const result = await this.productRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Product with ID ${id} not found!`);
        }
    }

    async updateProductName(id: string, name: string): Promise<Product> {
        const product = await this.getProductById(id);

        product.name = name;
        await this.productRepository.save(product);

        return product;
    }

    async updateProductQuantity(id: string, quantity: number): Promise<Product> {
        const product = await this.getProductById(id);

        product.quantity = quantity;
        await this.productRepository.save(product);

        return product;
    }
}
