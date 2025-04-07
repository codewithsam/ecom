import { Controller, Get } from '@nestjs/common';
import { LayoutService } from './layout.service';

@Controller('layout')
export class LayoutController {
  constructor(private readonly layoutService: LayoutService) { }

  @Get()
  findAll() {
    return this.layoutService.findAll();
  }
}
