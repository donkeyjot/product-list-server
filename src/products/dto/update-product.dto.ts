import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateProductDto {
    @IsOptional()
    @IsNotEmpty()
  name?: string;

    @IsNotEmpty()
  quantity?: number;

    price?: number;
    image?: string;
}
