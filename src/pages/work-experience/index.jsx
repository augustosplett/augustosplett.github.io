import MainLayout from '@/components/layouts/MainLayout'
import { useState, useEffect } from 'react';

export default function WorkExperience() {

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
        pageName={"Work Experience"}
      >
        <h1 style={{fontSize: "2rem"}}>🧑‍💼 Work Experience </h1>
        <br/>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical" style={{maxWidth: isLargeViewport ? "50vw" : "100vw"}}>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Oct 2022 - Present</time>
              <div className="text-lg font-black">Senior Product Owner</div>
              <div className="text-md italic">Vortigo Digital - Brazil</div>
              -Collaborated with internal and external stakeholders to define and achieve business goals. <br/>
              -Defined technical requirements for implementing, improving, and automating tasks.<br/>
              -Troubleshot technical and business problems.<br/>
              -Implemented comprehensive Power BI dashboard to provide insightful data visualization for stakeholders.<br/>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Apr 2021 - Sep 2022</time>
              <div className="text-lg font-black">Senior Product Owner</div>
              <div className="text-md italic">Localiza & Co. - Brazil</div>
              -Collaborated with internal and external stakeholders to define and achieve business goals.<br/>
              -Defined technical requirements for implementing, improving, and automating tasks.<br/>
              -Troubleshot technical and business problems.<br/>
              -Implemented comprehensive Power BI dashboard to provide insightful data visualization for stakeholders.<br/>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">May 2018 - Apr 2021</time>
              <div className="text-lg font-black">Senior Product Owner</div>
              <div className="text-md italic">Sicredi Cooperative Bank - Brazil</div>
              -Collaborated with my team and other stakeholders to deliver leasing platform.<br/>
              -Troubleshot issues utilizing tools like SQL<br/>
              -Automated Internal Process using Python.<br/>
              -Requirements Analysis.<br/>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Jun 2015 - Apr 2018</time>
              <div className="text-lg font-black">Senior Credit Analyst</div>
              <div className="text-md italic">Sicredi Cooperative Bank - Brazil</div>
              -Gathering information about clients;<br/>
              -Reading financial briefings;<br/>
              -Assessing, analysing and interpreting financial information;<br/>
              -Keeping company credit exposures within set risk bearing limits;<br/>
              -Using credit-scoring systems for small credit or unsecured personal loans;<br/>
              -Make recommendations about procedural/policy changes.<br/>
            </div>
            <hr />
          </li>
        </ul>
      </MainLayout>
    </>
  )
}

