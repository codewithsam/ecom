import { Controller, Get, Version } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) { }

  @Version('1')
  @Get()
  findAll() {
    return this.dashboardService.findAll();
  }
}
