import React from 'react';
import Rating from '../../../components/UI/Rating';

import styles from './Section.module.scss';

const reviews = [
  {
    name: 'Dr. Stephanie Leonard',
    review: 'Your work was amazing! The team is very happy.',
    rating: 8,
    // TODO:
    when: '2 hours ago',
    jobTitle: 'Make a logo',
  },

  {
    name: 'Steve Jobs',
    review: 'Bro, duck a job? Seriously?',
    rating: 2,
    // TODO:
    when: '3 hours ago',
    jobTitle: 'Make a Title',
  },
];

interface ReviewProps {
  name: string;
  review: string;
  rating: number;
  //   TODO:
  when: string;
  jobTitle: string;
}

const Review: React.FC<ReviewProps> = ({ name, review, rating, when, jobTitle }) => (
  <div className={styles.itemWrapper}>
    <div className={styles.header}>
      <h4 className={styles.name}>{name}</h4>
      <Rating />
    </div>
    <p className={styles.review}>{review}</p>

    <div className={styles.footer}>
      <div className={styles.left}>
        <img src="/icons/briefcase.svg" />
        <p className={styles.jobTitle}>{jobTitle}</p>
      </div>
      <p className={styles.date}>{when}</p>
    </div>
  </div>
);

const Reviews = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src="/icons/reviews.svg" />
        <p className={styles.title}>Reviews</p>
      </div>

      <div className={styles.reviewsContent}>
        {reviews.map((review) => (
          <Review {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
