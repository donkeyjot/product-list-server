import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
  name: string;

    image: string;
    price: number;
}
