import React from 'react'

function UseFOrm() {
    const handle = () => {
        console.log("Form Submitted");

    }

    function Submited() {
        return (
            <>
                <input type="text" placeholder='Eneter your name ' />
                <br />
                <br />
                <input type="password" placeholder='Eneter your Password ' />
                <br />
                <br />
                <button type="submit">Submit</button>
            </>
        )
    }
    return (
        <>
            <form action={handle} method="post">
                <Submited/>

            </form>
        </>
    )
}

export default UseFOrm