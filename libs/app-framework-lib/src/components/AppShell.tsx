import React from 'react'
import AppTemplate from "./AppTemplate"
import { AppProps } from '../lib/types';

function AppShell (props: AppProps) {
  console.log(props)
    return (
      <main>
        <AppTemplate props={props} />
      </main>
    )
  }
  
  export default AppShell;