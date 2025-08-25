import React from 'react';
import styles from './ResultBanner.module.css';

const ResultBanner = ({ result, resultClass }) => (
  <div className={`${styles.resultBanner} ${styles[resultClass]}`}>
    <h2>{result || 'Test Banner'}</h2>
  </div>
);

export default ResultBanner;
