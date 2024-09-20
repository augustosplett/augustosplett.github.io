import MainLayout from '@/components/layouts/MainLayout';
import styles from './Portfolio.module.css';
import Card from '@/components/card';

export default function Portfolio() {
  const page = "Portfolio";
  return (
    <>
      <MainLayout
        pageName={page}
      >
        <h1 style={{fontSize: "2rem"}}>🤓 My Portfolio </h1>
        <br/>
        <div className={styles.cardsDesktop}>
          <h2 style={{fontSize: "1.5rem" , width: "10%"}}>WebApps</h2>
          <div className={styles.cardsContainer}>
            <Card
              title="To Do App"
              description="A simple ToDo List app made with Java and React."
              imgHref="/img/todolist.png"
            />
          </div>
        </div>
        
        <div className={styles.cardsDesktop}>
          <h2 style={{fontSize: "1.5rem", width: "10%"}}>Games</h2>
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
