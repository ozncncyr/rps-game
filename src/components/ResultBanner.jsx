import React from 'react';
import styles from './ResultBanner.module.css';

const ResultBanner = ({ result }) => (
  <div className={styles.resultBanner}>{result && <h2>{result}</h2>}</div>
);

export default ResultBanner;
