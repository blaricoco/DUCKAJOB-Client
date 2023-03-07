import React from 'react';

import styles from './Section.module.scss';

const links = [
  { link: '', text: 'Github', icon: '/icons/brands/github.svg' },
  { link: '', text: 'LinkedIn', icon: '/icons/brands/linkedin.svg' },
  { link: '', text: 'Instagram', icon: '/icons/brands/linkedin.svg' },
  { link: '', text: 'Personal Website', icon: '/icons/brands/github.svg' },
  { link: '', text: 'Behance', icon: '/icons/brands/github.svg' },
  { link: '', text: 'Telegram', icon: '/icons/brands/linkedin.svg' },
];

interface LinkProps {
  link: string;
  text: string;
  icon: any;
}

const Link: React.FC<LinkProps> = ({ link, icon, text }) => (
  <div className={styles.itemWrapper}>
    <img src={icon} />
    <p>{text}</p>
  </div>
);

const Links = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src="/icons/links.svg" />
        <p className={styles.title}>Social media</p>
      </div>

      <div className={styles.linksContent}>
        {links.map((link) => (
          <Link {...link} />
        ))}
      </div>
    </div>
  );
};

export default Links;
