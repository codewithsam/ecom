import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) { }

  @Version("1")
  @Get()
  findAll() {
    return this.dashboardService.findAll();
  }
}
