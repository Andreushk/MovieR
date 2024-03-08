import SmartphoneIcon from '@/assets/images/icons/smartphone.svg';
import DesktopIcon from '@/assets/images/icons/desktop.svg';
import TabletIcon from '@/assets/images/icons/tablet.svg';
import LaptopIcon from '@/assets/images/icons/laptop.svg';

export interface ISupportableDevice {
  svgPath: string;
  title: string;
  description: string;
  alt: string;
}

const supportableDevices: ISupportableDevice[] = [
  {
    svgPath: SmartphoneIcon,
    title: 'Smartphones',
    description: 'Will work fine on smartphones',
    alt: 'smartphone icon',
  },
  {
    svgPath: TabletIcon,
    title: 'Tablets',
    description: 'Will work fine on tablets',
    alt: 'tablet icon',
  },
  {
    svgPath: LaptopIcon,
    title: 'Laptops',
    description: 'Will work fine on laptops',
    alt: 'laptop icon',
  },
  {
    svgPath: DesktopIcon,
    title: 'Desktops',
    description: 'Will work fine on desktops',
    alt: 'desktop icon',
  },
];

export default supportableDevices;
