import { Injectable } from '@nestjs/common';

@Injectable()
export class LayoutService {
  findAll() {
    return {
      header: {
        brand: {
          type: 'full-logo',
          show: true,
          weight: 0,
        },
        superSaver: {
          type: 'toggle',
          show: true,
          weight: 1,
        },
        location: {
          show: true,
          weight: 2,
        },
        search: {
          show: true,
          weight: 3,
          placeholder: 'type product name to search...',
          leftIcon: 'search',
          rightIcon: 'cross',
          button: true,
        },
        buttonGroup: {
          type: 'icon-only-button',
          show: true,
          weight: 100,
          buttons: [
            {
              title: 'login',
              ariaLabel: 'login',
              path: '/login',
            },
            {
              title: 'cart',
              ariaLabel: 'cart',
              path: '/cart',
            },
          ],
        },
      },
      subHeader: {
        buttons: [
          {
            title: 'Cafe',
            path: '/shopping/cafe',
          },
          {
            title: 'Toys',
            path: '/shopping/toys',
          },
          {
            title: 'Home',
            path: '/shopping/home',
          },
          {
            title: 'Fresh',
            path: '/shopping/fresh',
          },
          {
            title: 'Electronics',
            path: '/shopping/electronics',
          },
          {
            title: 'Beauty',
            path: '/shopping/beauty',
          },
          {
            title: 'Fashion',
            path: '/shopping/fashion',
          },
          {
            title: 'Baby Store',
            path: '/shopping/baby-store',
          },
        ],
      },
      leftNav: {
        type: 'icon-left-button',
        items: [
          {
            title: 'profile',
            path: '/profile',
          },
          {
            title: 'settings',
            path: '/settings',
          },
          {
            title: 'about',
            path: '/about',
          },
        ],
      },
    };
  }
}
