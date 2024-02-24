import React from 'react'
import NonOrgDash from './NonOrgDash'
import OrgDash from './OrgDash'
export default function Dashboard({ isOrg }: { isOrg: boolean }) {
  return (
    <>
      {
          isOrg 
          ?
          <OrgDash />
          :
          <NonOrgDash />
      }
    </>
  )
}
