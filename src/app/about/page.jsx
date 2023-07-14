import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a team of passionate individuals dedicated to creating
            exceptional digital experiences. Our expertise lies in crafting
            innovative solutions that engage and inspire our clients audiences.
            With years of industry experience, we bring creativity, expertise,
            and a meticulous attention to detail to every project we undertake.
            <br />
            <br />
            <br />
            Our team is composed of talented designers, developers, and
            strategists who collaborate closely to deliver high-quality results.
            We take pride in our ability to understand our clients unique needs
            and translate them into captivating digital stories.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            At Digital Storytellers, we offer a wide range of services to help
            businesses succeed in the digital landscape. Our expertise includes:
            <br /> - Creative Illustrations: We create visually stunning
            illustrations that bring ideas to life and captivate audiences.
            <br /> - Dynamic Websites: Our team designs and develops interactive
            websites that provide seamless user experiences and drive
            engagement.
            <br /> - Fast and Handy: We prioritize performance and usability,
            ensuring that our solutions are fast, efficient, and user-friendly.
            <br /> - Mobile Apps: We specialize in developing mobile
            applications that offer seamless experiences across various
            platforms.
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  );
};
export default About;
