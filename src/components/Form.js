import React from 'react';
import './Form'

const Form = props => {
    return(
        <form onSubmit={props.submit}>
            <input
            type="text" 
            value={props.value} 
            onChange={ props.change}
            placeholder="Search Locations"
            />
            <button>Search</button>
        </form>
    )
}
export default Form;