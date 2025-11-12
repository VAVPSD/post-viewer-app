import { NavLink, useParams } from 'react-router-dom';
import styles from './UserTabs.module.css';
import { TABS } from '../model/consts';

const UserTabs = () => {
  const { id = '1' } = useParams();

  return (
    <nav className={styles.tabs}>
      <ul className={styles.list}>
        {TABS.map((tab) => (
          <li key={tab.label}>
            <NavLink
              to={tab.to(id)}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {tab.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default UserTabs;
