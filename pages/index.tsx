import { MainLayout } from '../components/layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout
      text={"Home"}
      href={'/about'}
      textRoute='pages/index.tsx'>

    </MainLayout>
  )
}
