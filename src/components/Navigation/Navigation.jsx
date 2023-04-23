import Link from 'next/link'
import styles from './Navigation.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'
import '../../styles/globals.css'


const links = [
  {
    label: 'Home',
    route: '/',
    color: '#D0A9F5',
  },
  {
    label: 'Futbol',
    route: '/futbol',
    color: 'var(--color-futbol)',
  },
  {
    label: 'F1',
    route: '/f1',
    color: 'var(--color-f1)',
  },
  {
    label: 'Baloncesto',
    route: '/baloncesto',
    color: 'var(--color-baloncesto)',
  },
  {
    label: 'Series',
    route: '/series',
    color: 'var(--color-series)',
  },
  {
    label: 'Peliculas',
    route: '/peliculas',
    color: 'var(--color-peliculas)',
  },
  {
    label: 'Varios',
    route: '/varios',
    color: 'var(--color-varios)',
  },
];

export function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
        <Image
          src={logo}
          width={50}
          height={70}
         />
          {links.map(({ label, route, color}) => (
            <li key={route} style={{color}}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}