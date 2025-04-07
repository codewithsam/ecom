import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  findAll() {
    return {
      content: {
        atf: [
          {
            widget: 'subCategoryCarousal',
            config: {},
          },
          {
            widget: 'heroBanner',
            config: {},
          },
          {
            widget: 'sponsored',
            config: {},
          },
        ],
        btf: [
          {
            widget: 'trendingProductsCarousal',
            config: {},
          },
          {
            widget: 'howItWorks',
            config: {},
          },
        ],
      },
    };
  }
}
