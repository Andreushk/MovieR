import AvailiableRoutingPaths from '@/app/types/routing';

export interface INavbarItemOption {
  displayTitle: string;
  path: AvailiableRoutingPaths;
}

export const navbarItemsOptions: INavbarItemOption[] = [
  {
    displayTitle: 'Discover',
    path: '/',
  },
  {
    displayTitle: 'About',
    path: '/about',
  },
  {
    displayTitle: 'Contact',
    path: '/contact',
  },
];
