import MainLayout from '@/components/layouts/MainLayout'

export default function Skills() {
  const page = "Portfolio";

  return (
    <>
      <MainLayout
        pageName={page}
      >
        <h1>{page}</h1>
      </MainLayout>
    </>
  )
}
