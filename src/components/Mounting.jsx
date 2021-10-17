import React from 'react';

function Mounting() {
    const URL = "https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b";
    return (
        <>
            <div className="container text-white" style={{backgroundColor: "firebrick", boxShadow: "0px 0px 20px 0px darkcyan", borderRadius: "20px"}}>
                <div className="row p-4 my-4">
                    <div className="col-md-10 mx-auto">
                        <a href={URL} className="text-capatalize fs-4" style={{color: "gold"}}>Mounting</a>
                        <p>
                        The mounting means to put elements into the DOM. React uses virtual DOM to put all the elements into the memory. It has four built-in methods to mount a component namely <br /><br/>
                        1. constructor()<br />
                        2. getDerivedStateFromProps()<br />
                        3. render()<br />
                        4. componentDidMount()<br /><br />

                        <span style={{color:"#0dcaf0"}}>1. constructor() :</span><br />
                        method is called when the component is initiated and it’s the best place to initialize our state. The constructor method takes props as an argument and starts by calling super(props) before anything else.<br /><br />
                        
                        <span style={{color:"#0dcaf0"}}>2. getDerivedStateFromProps() :</span> <br />
                        The getDerivedStateFromProps method is called right before rendering the element in our DOM. It takes props and state as an argument and returns an object with changes to the state.<br /><br />
                        
                        <span style={{color:"#0dcaf0"}}>3. render() :</span> <br />
                        This is the only compulsory method required by the React. This method is responsible to render our JSX to DOM <br /><br />
                        
                        <span style={{color:"#0dcaf0"}}>4. componentDidMount() :</span> <br />
                        The most common and widely used lifecycle method is componentDidMount. This method is called after the component is rendered. You can also use this method to call external data from the API.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mounting
