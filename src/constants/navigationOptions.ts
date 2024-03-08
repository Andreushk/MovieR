import AvailiableRoutingPaths from '@/types/routing';

export interface INavbarItemOption {
  displayTitle: string;
  path: AvailiableRoutingPaths;
}

const navbarItemsOptions: INavbarItemOption[] = [
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

export default navbarItemsOptions;
