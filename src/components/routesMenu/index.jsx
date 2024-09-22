import Link from 'next/link';
import { useRouter } from 'next/router';

export default function RoutesMenu({ cssClasses }) {
  const router = useRouter();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Work Experience', path: '/work-experience' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <ul className={cssClasses}>
      {menuItems.map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className={`text-lg ${
              router.pathname === item.path ? 'text-neutral bg-gray-200' : ''
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
