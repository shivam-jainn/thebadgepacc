import React from 'react'

// Composite
import { UserNavbar } from '@/components/user/navbar/UserNavbar'

// primitives
import NonOrgPage from "./Components/NonOrgPage"
import OrgPage from './Components/OrgPage';

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

// Lucia 
import { auth } from "@/auth/lucia";
import * as context from "next/headers";
import { redirect } from "next/navigation";


export default async function page() {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

  const authRequest = auth.handleRequest("GET", context);
	const session = await authRequest.validate();
	if (!session) redirect("/login");
  
  console.log(session);
  

  const isOrg = true;
  return (
    <section >
        <UserNavbar />

        {isOrg ? <OrgPage/> : <NonOrgPage/>}

  
  

       
    </section>
  )
}
