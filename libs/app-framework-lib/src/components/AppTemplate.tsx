import React from 'react'
// import { BaseHeader } from '@libs/base-lib';

function AppTemplate(props: any) {
    return (
        <>
            <div>{props.user}</div>
            {/* <BaseHeader
                appName={props.appName}
                user={props.user}
                > 
                <NavigationPanel routes={props.routes} />
            </BaseHeader> */}
        
        </>
    )
}

export default AppTemplate;