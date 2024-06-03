import React from 'react'
import { BaseHeader, NavigationPanel } from '@libs/base-lib';
import { AppProps } from '../lib/types';


function AppTemplate ({props}:{props: AppProps}) {
  return (
    <>
      <BaseHeader {...props}>
        <NavigationPanel routes={props.routes} />
      </BaseHeader>
    </>
  )
}

export default AppTemplate;