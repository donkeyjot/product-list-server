import { IsString, IsOptional } from 'class-validator';

export class GetProductsFilterDto {
    @IsOptional()
    @IsString()
  name?: string;

    @IsOptional()
    @IsString()
  search?: string;
}
