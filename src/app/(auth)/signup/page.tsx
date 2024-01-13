import React from 'react';

// composites
import SignInCard from '../login/components/SignInCard';


export default function Page() {
  return (
    <section className='relative flex flex-col items-center justify-center h-screen'>
        <img src="/MobileSigninBG.svg" alt="" className='absolute top-0 md:hidden' />
      <SignInCard signup={true} />
    </section>
  );
}
