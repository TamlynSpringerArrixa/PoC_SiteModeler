import React from 'react'

function Screen(props: any) {
    return (
        <>
            <h1>{props.title}</h1>
            {props.children}
        </>
    )
}

export default Screen;