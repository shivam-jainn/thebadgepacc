import Navbar from '@/components/navbar/Navbar'
import Landing from '@/components/pages/landing/Landing';
import Dashboard from '@/components/pages/dashboard/Dashboard';

import { authOptions } from '@/lib/auth-utils/auth';

import { getServerSession } from 'next-auth';
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  
  return (
    <>
      <Navbar />

    <section className='px-8'>  
      {
        (session?.user)?
          <Dashboard isOrg={false} />
        :
        <Landing />
      }
    </section>
    </>
  )
}
