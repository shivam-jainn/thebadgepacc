import React from 'react'
import Signincard from '@/components/signincard'

export default function Page() {
    
    const title = "Join us and grow with us :)"
  
    return (
    <section className='m-auto '>
        <Signincard title={title}/>
    </section>
  )
}
