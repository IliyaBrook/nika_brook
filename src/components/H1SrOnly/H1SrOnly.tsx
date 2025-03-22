// src/components/H1SrOnly/H1SrOnly.tsx
import React from 'react';
import styles from './H1SrOnly.module.scss';

interface H1SrOnlyProps {
	children: React.ReactNode;
}

const H1SrOnly: React.FC<H1SrOnlyProps> = ({ children }) => {
	return <h1 className={styles.visuallyHidden}>{children}</h1>;
};

export default H1SrOnly;