import MainLayout from '@/components/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <MainLayout pageName={"Home"}>
        <h1 style={{fontSize: "2rem"}}>👋 Hi there! </h1>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="image-desktop"
              style={{maxWidth: "30vw", maxHeight:"40vh"}}
              src="./img/profile.jpg"
              alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}