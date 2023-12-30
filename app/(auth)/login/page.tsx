import React from 'react'
import Signincard from '@/components/signincard'

export default function Page() {

  const title = "Welcome back !"

  return (
    <section className='m-auto '>
        <Signincard title={title}/>
    </section>
  )
}
