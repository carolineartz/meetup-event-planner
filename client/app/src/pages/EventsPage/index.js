import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { EventsContainer } from 'containers';

const EventsPage = () => (
  <div className={styles.container}>
    <EventsContainer />
  </div>
);

export default cssModules(EventsPage, styles);
