import React from 'react';
import {connect} from 'react-redux'; //connect is the module. By using this we can easily store values in component
import {IncAction} from './actions';
import {DecAction} from './actions';



const App=({local_varaiable,IncAction,DecAction})=>{
    return(
        <div>
            <center>
                <h1>{local_varaiable}</h1> <br/>
                <button onClick={IncAction}>Increment</button>
                <button onClick={DecAction}>Decrement</button>
            </center>
        </div>
    );
};

const mapStateToProps=state=>({    //so that we can use all the state values
    local_varaiable : state
})

export default connect(mapStateToProps,{IncAction,DecAction}) (App);   //mapStateToProps,mapDispatchToProps