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
        const response = await fetch('https://api.github.com/users/augustosplett');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const info = await response.json();
        setUserData({
          userName: info.login,
          avatar_url: info.avatar_url,
          name: info.name,
          location: info.location,
          bio: info.bio,
          public_repos: info.public_repos,
        });
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
      <MainLayout pageName={page}>
        <div className={isLargeViewport ? styles.cardsContainer : styles.cardsMobile}>
          <GitHubUserInfo user={userData} isLargeViewport={isLargeViewport} />
        </div>
        <br />
        <h1 style={{ fontSize: "2rem" }}>🤓 My Portfolio </h1>
        <hr style={{
          border: 'none',
          height: '2px',
          backgroundColor: '#ccc',
          width: '100%',
          margin: '20px 0'
        }} />
        
        <br/>
        <div className={isLargeViewport ? styles.cardsContainer : styles.cardsMobile}>
          <h2 className={styles.categoryTitles}>WebApps</h2>
          <div className={styles.cardsContainer}>
            <Card
              title="To Do App"
              description="A simple ToDo List app made with Java and React."
              imgHref="/img/todolist.png"
            />
          </div>
        </div>
        
        <div className={isLargeViewport ? styles.cardsContainer : styles.cardsMobile}>
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
  );
}
