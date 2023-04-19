
import Link from 'next/link';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '@/components/layouts/MainLayout';
import { ReactNode } from 'react';
import Image from 'next/image';

function AboutPage() {
  return (
    <>
      <MainLayout
        href='/contact'
        text='About'
        textRoute='pages/about.tsx'>
      </MainLayout>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <DarkLayout>
      {page}
    </DarkLayout>
  )
}

export default AboutPage;