import React from 'react'

// Composite
import { UserNavbar } from '@/components/user/navbar/UserNavbar'

// primitives
import NonOrgPage from "./Components/NonOrgPage"
import OrgPage from './Components/OrgPage';

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export default function page() {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

  const isOrg = true;
  return (
    <section >
        <UserNavbar />

        {isOrg ? <OrgPage/> : <NonOrgPage/>}

  
  

       
    </section>
  )
}
