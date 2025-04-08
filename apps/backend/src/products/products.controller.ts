import { Controller, Get, Version } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Version('1')
  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}
