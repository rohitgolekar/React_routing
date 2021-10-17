import React from 'react'

function Unmounting() {
    const URL = "https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b";
    return (
        <>
            <div className="container text-white" style={{backgroundColor: "firebrick", boxShadow: "0px 0px 20px 0px darkcyan", borderRadius: "20px"}}>
                <div className="row p-4 my-4">
                    <div className="col-md-10 mx-auto">
                        <a href={URL} className="text-capatalize fs-4" style={{color: "gold"}}>Unmounting</a>
                        <p>
                        The final or the end of the react lifecycle is Unmounting. This is used when a component is removed from the DOM. React has only one built-in method that gets called when a component is unmounted<br/><br />
                        <span style={{color:"#0dcaf0"}}>1. componentWillUnmount() :</span> <br />
                        If there are any cleanup actions like canceling API calls or clearing any caches in storage you can perform that in the componentWillUnmount method. You cannot use setState inside this method as the component will never be re-rendered.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Unmounting
