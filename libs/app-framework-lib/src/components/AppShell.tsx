import React from 'react'
import AppTemplate from "./AppTemplate"

function AppShell(props: any) {
    console.log(props)

    return (
      <main>
        <h1>HELLO</h1>
        <AppTemplate props={props} />
      </main>
    )
  }
  
  export default AppShell