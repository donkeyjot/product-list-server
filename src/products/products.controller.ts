import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    getProducts(@Query() filterDto: GetProductsFilterDto): Promise<Product[]> {
        return this.productsService.getProducts(filterDto);
    }

    @Post()
    createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.createProduct(createProductDto);
    }

    @Get('/:id')
    getProductById(@Param('id') id: string): Promise<Product> {
        return this.productsService.getProductById(id);
    }

    @Delete('/:id')
    deleteProductById(@Param('id') id: string): Promise<void> {
        return this.productsService.deleteProductById(id);
    }

    @Patch('/:id/name')
    updateProductName(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    ): Promise<Product> {
        const { name } = updateProductDto;

        return this.productsService.updateProductName(id, name);
    }
}
