import Link from 'next/link'
import styles from './Navigation.module.css'

const links =[{
  label: 'Home',
  route: '/',
},
{
  label: 'Futbol',
  route: '/futbol',
},
{
  label: 'F1',
  route: '/f1',
},
{
  label: 'Baloncesto',
  route: '/baloncesto',
},
{
  label: 'Series',
  route: '/series',
},
{
  label: 'Películas',
  route: '/peliculas',
},
{
  label: 'Varios',
  route: '/varios',
}
]

export  function Navigation() {
   return  (
    <header className={styles.header}>
          <nav>
            <ul className={styles.navigation}>
              {links.map(({ label, route }) => (
                <li key={route}>
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