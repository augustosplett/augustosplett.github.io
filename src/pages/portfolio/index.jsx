import MainLayout from '@/components/layouts/MainLayout';
import styles from './Portfolio.module.css';
import Card from '@/components/card';
import { useEffect, useState } from 'react';
import GitHubUserInfo from '@/components/githubUserInfo';

export default function Portfolio() {
  const page = "Portfolio";

  const [isLargeViewport, setIsLargeViewport] = useState(false);
  const [error, setError] = useState();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeViewport(window.innerWidth > 720);
    };
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/git-stats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //console.log(data);
        setUserData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching user data:', err);
      }
    };

    fetchUserData();
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!userData) return <div>Loading...</div>;

  return (
    <>
      <MainLayout
        pageName={page}
      >

        <div className={isLargeViewport? styles.cardsContainer : styles.cardsMobile}>
          <GitHubUserInfo user={userData} isLargeViewport={isLargeViewport} />
        </div>
        <br />
        <h1 style={{fontSize: "2rem"}}>🤓 My Portfolio </h1>
        <hr style={{
          border: 'none',        // Removes default border
          height: '2px',        // Height of the line
          backgroundColor: '#ccc', // Color of the line
          width: '100%',        // Width of the line (can be set to a specific value)
          margin: '20px 0'     // Vertical spacing around the line
        }} />
        
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
