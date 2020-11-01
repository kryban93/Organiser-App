import React from 'react';
import * as style from './MainView.module.scss';

const MainView = () => {
  return (
    <section className={style.wrapper}>
      <h1 className={style.title}>Welcome, User</h1>
    </section>
  );
};

export default MainView;
