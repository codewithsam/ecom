import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutModule } from './layout/layout.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [DashboardModule, LayoutModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
