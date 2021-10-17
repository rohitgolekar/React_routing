import React from 'react'

function Updating() {
    const URL = "https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b";
    return (
        <>
           <div className="container text-white" style={{backgroundColor: "firebrick", boxShadow: "0px 0px 20px 0px darkcyan", borderRadius: "20px"}}>
                <div className="row p-4 my-4">
                    <div className="col-md-10 mx-auto">
                        <a href={URL} className="text-capatalize fs-4" style={{color: "gold"}}>Updating</a>
                        <p>
                        This is the second phase of the React lifecycle. A component is updated when there is a change in state and props React basically has five built-in methods that are called while updating the components.<br/><br/>
                        1. getDerivedStateFromProps()<br/>
                        2. shouldComponentUpdate()<br/>
                        3. render()<br/>
                        4. getSnapshotBeforeUpdate()<br/>
                        5. componentDidUpdate()<br/><br/>

                        <span style={{color:"#0dcaf0"}}>1. getDerivedStateFromProps() :</span> <br />
                        The getDerivedStateFromProps method is called right before rendering the element in our DOM. It takes props and state as an argument and returns an object with changes to the state.<br /><br />
                        
                        <span style={{color:"#0dcaf0"}}>2. shouldComponentUpdate() :</span><br/>
                        This lifecycle method is used when you want your state or props to update or not. This method returns a boolean value that specifies whether rendering should be done or not. The default value is true.<br/><br />
                    
                        <span style={{color:"#0dcaf0"}}>3. render() :</span> <br />
                        This is the only compulsory method required by the React. This method is responsible to render our JSX to DOM <br /><br />
                        
                        <span style={{color:"#0dcaf0"}}>4. getSnapshotBeforeUpdate() :</span><br/>
                        This method is called right before updating the DOM. It has access to props and state before the update. Here you can check what was the value of your props or state before its update.<br /><br/>

                        <span style={{color:"#0dcaf0"}}>5. componentDidUpdate() :</span><br/>
                        The componentDidUpdate method is called after the component is updated in the DOM. This is the best place in updating the DOM in response to the change of props and state.

                       </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Updating
