import MainLayout from '@/components/layouts/MainLayout';
import styles from './Portfolio.module.css';
import Card from '@/components/card';
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const page = "Portfolio";

  const [isLargeViewport, setIsLargeViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeViewport(window.innerWidth > 720);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <MainLayout
        pageName={page}
      >
        <h1 style={{fontSize: "2rem"}}>🤓 My Portfolio </h1>
        <br/>
        <div className={isLargeViewport? styles.cardsContainer : styles.cardsMobile}>
          <h2 className={styles.categoryTitles}>WebApps</h2>
          <div className={styles.cardsContainer}>
            <Card
              title="To Do App"
              description="A simple ToDo List app made with Java and React."
              imgHref="/img/todolist.png"
            />
          </div>
        </div>
        
        <div className={isLargeViewport? styles.cardsContainer : styles.cardsMobile}>
          <h2 className={styles.categoryTitles}>Games</h2>
          <div className={styles.cardsContainer}>
            <Card
              title="Breakout Game"
              description="A simpler version of the classic atari game Breakout!"
              imgHref="/img/breakout_2.gif"
            />

            <Card
              title="Memory Game"
              description="A web version of a classic of the classics memory game."
              imgHref="/img/memory-game.png"
            />

            <Card
              title="Flappy Bird"
              description="My version of Flappy bird developed with Unity."
              imgHref="/img/flappy_bird.gif"
            />
          </div>
        </div>
      </MainLayout>
    </>
  )
}
