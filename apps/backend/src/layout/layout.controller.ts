import { Controller, Get, Version } from '@nestjs/common';
import { LayoutService } from './layout.service';

@Controller('layout')
export class LayoutController {
  constructor(private readonly layoutService: LayoutService) { }

  @Version('1')
  @Get()
  findAll() {
    return this.layoutService.findAll();
  }
}
