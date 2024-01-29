import Navbar from '@/components/navbar/Navbar'
import Landing from '@/components/pages/landing/Landing';
import Dashboard from '@/components/pages/dashboard/Dashboard';

import { authOptions } from '@/lib/auth-utils/auth';

import { getServerSession } from 'next-auth';

import { useParams } from 'next/navigation';

import Firsttime from '@/components/firsttime/EnterUsername';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
  
    
      <Navbar />

    <section className='px-8'>  
      {
        (session?.user)?
          <Dashboard isOrg={true} />
        :
        <Landing />
      }
    </section>
    </>
  )
}
