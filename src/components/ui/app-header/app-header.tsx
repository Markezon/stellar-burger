import React, { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import { Link } from 'react-router-dom';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
        <Link
          to='/'
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
        >
          <BurgerIcon type={'primary'} />
          <p className='text text_type_main-default ml-2 mr-10'>Конструктор</p>
        </Link>
        <Link
          to='/feed'
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
        >
          <ListIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>Лента заказов</p>
        </Link>
      </div>
      <div className={styles.logo}>
        <Link
          to='/'
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
        >
          <Logo className='' />
        </Link>
      </div>
      <Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={styles.link_position_last}>
          <ProfileIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>
            {userName || 'Личный кабинет'}
          </p>
        </div>
      </Link>
    </nav>
  </header>
);
