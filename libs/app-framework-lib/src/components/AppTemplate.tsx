import React from 'react'
import { BaseHeader, NavigationPanel } from '@libs/base-lib';

function AppTemplate(props: any) {
    console.log(props)
    return (
        <>
            <BaseHeader
                appName={props.appName}
                user={props.user}
                > 
                <NavigationPanel routes={props.routes} />
            </BaseHeader>
        
        </>
    )
}

export default AppTemplate;