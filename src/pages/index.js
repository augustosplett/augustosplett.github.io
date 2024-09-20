import MainLayout from '@/components/layouts/MainLayout'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
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
      <MainLayout pageName={"Home"}>
        <h1 style={{fontSize: "2rem"}}>👋 Hi there! </h1>
        <br/>
        <div className="card lg:card-side bg-base-100 shadow-xl" style={{maxWidth: isLargeViewport ? "50vw" : "100vw"}}>
          <figure style={{display: isLargeViewport ? "block" : "none"}}>
            <Image 
              className="image-desktop"
              style={{maxWidth: "40vw"}}
              src="/img/profile.jpg"
              alt="Profile"
              width={1000} 
              height={1000}/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Who Am I?</h2>
            <p>My name is <strong>Augusto</strong> and I&apos;m a brazilian fullstack developer living in Montreal.</p>
            <p>I&apos;ve been working in IT industry since 2018 and I belive that technology should be used to solve problems.</p>
            <p> I have knowledge in Project and Product management, business analysis, software specification, problem solving and data analysis.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-block">Take A Look At My Portfolio</button>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}