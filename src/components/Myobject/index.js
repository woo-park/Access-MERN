import React, {useState, useContext} from 'react';
import {StateContext} from '../Context';             //useContext and {ListContext} is what's allowing to access the context - db
import Item from './Item';
import uuid from 'react-uuid';


const Mystate = () => {
  const [state, setState] = useContext(StateContext);      // allows you to access the context - bc we have provider wrapped around in root


  return(
    <div className='imageText'>


    {state.length > 0 ? <Item each = {state[state.length - 1]} key = {uuid()} /> : ''}
    </div>
  );
}

export default Mystate;

// previously <= but only sending the last one of the state
// {state.map((each, index)=>(
//   <Item each = {each} key = {uuid()} />
// ))}


// try build now -> react running in 3000, server on 8080, when build is done -> react also runs in 8080 -> from server, server the build folder -> pointing to index.html -> make sure 8080/api/altpost is working, and form post&get is posting and retrieving from 8080


//simply passing in each , rather than each one props
