import React from 'react';
import styles from './ResultBanner.module.css';

const ResultBanner = ({ result, resultClass }) => (
  <div className={`${styles.resultBanner} ${styles[resultClass]}`}>
    {result && <h2>{result}</h2>}
  </div>
);

export default ResultBanner;
