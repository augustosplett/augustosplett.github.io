import MainLayout from '@/components/layouts/MainLayout'

export default function Education() {
  return (
    <>
      <MainLayout
        pageName={"Education"}
      >
        <h1 style={{fontSize: "2rem"}}>👨‍🎓 My Education </h1>
        <ul className="timeline timeline-vertical">
        <li>
          <div className="timeline-start">2023 - 2024</div>
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
          <div className="timeline-end timeline-box">AEC - Programmer Analyst <br/><i>College LaSalle Montreal</i></div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start">2017 - 2019</div>
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
          <div className="timeline-end timeline-box">MBA - User Experience <br/><i>Uniritter - Brazil</i></div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start">2009 - 2015</div>
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
          <div className="timeline-end timeline-box">BBA - Bachelor in Business Administration<br/><i>Uniritter - Brazil</i></div>
          <hr />
        </li>
        
      </ul>
      </MainLayout>
    </>
  )
}
