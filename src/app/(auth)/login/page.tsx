import React from 'react';
import { Logo } from '@/lib/icons/Logo';

// composites
import SignInCard from './components/SignInCard';


export default function Page() {
  return (
    <section className='relative flex flex-col items-center justify-center h-screen'>
        <img src="/MobileSigninBG.svg" alt="" className='absolute top-0 md:hidden' />
      <SignInCard signup={false} />
    </section>
  );
}
