import React from 'react'
import AppTemplate from "./AppTemplate"

function AppShell(props: any) {

    return (
      <main>
        <AppTemplate props={props} />
      </main>
    )
  }
  
  export default AppShell;