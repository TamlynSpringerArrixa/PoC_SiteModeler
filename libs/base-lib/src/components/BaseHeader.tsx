import React from 'react'

function BaseHeader(props: any) {
    return (
        <>
            <h1>{props.title}</h1>
            {props.children}
        </>
    )
}

export default BaseHeader;