import { Paragraph, Title } from '@/components/common';
import Link from 'next/link';

const TITLE = 'Page not found :/';
const TEXT = "It looks like that page doesn't exist.";
const LINK = 'Back to Discover page';

const NotFoundPage: React.FC = () => (
  <div className="not_found_container">
    <Title>{TITLE}</Title>
    <Paragraph type="secondary">{TEXT}</Paragraph>
    <Link href="/">{LINK}</Link>
  </div>
);

export default NotFoundPage;
