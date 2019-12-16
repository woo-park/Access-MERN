import React, {useState, useContext} from 'react';

import {StateContext} from '../Context';
import axios from 'axios';

//define the function   //export bottom
// pull out [state] and [setState] from StateContext <= we imported
const AddToState = () => {
  const [state, setState] = useContext(StateContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const updateName = (e) => {
    setName(e.target.value);
  }

  const updateDescription = (e) => {
    setDescription(e.target.value);
  }

  // const addItem = (e) => {
  //   e.preventDefault();
  //   setState( (previousState) => [...previousState, {name:name, tags:description}]);
  // }
  const modifyItem = (e) => {
    e.preventDefault();

    let last = state.pop();   // return the last ele
    last.name = name;         // assign new value
    last.tags = description;
    last.description = description;

    // console.log(last,'last')
    // last.objectName


    console.log(name, description);
    let altpost = {
                    type: 'artwork',
                    name: name,
                    description: description,
                    artistDisplayName: last.artistDisplayName,
                    medium: last.medium,
                    id: last.id,
                    primaryImage: last.primaryImage
                  }
    axios.post('http://localhost:8080/api/altpost', altpost)
      .then(res => console.log(res.data))
      .then(success => {setState( (previousState) => [
        ...previousState, last
      ])
      console.log(state,'state after adding')
    }
    )
      .catch(function (error) {
    console.log(error);
    // document.querySelectorAll('input').value = ''
  });






    /*{

    const url = 'http://localhost:8080/api/altpost';
    const data = { name: last.name };

    fetch(url, {
      method: 'post',
      body: JSON.stringify({name: 'jay', description: 'mydes'})
    }).then(function(response) {
      // console.log(response,'response')
      console.log('hi')
      // return response.json();

    })

    // no freaking idea
    // form is not connected with whatever
    // clientside - running in 3000
    // server - running in 8080
    // so cors? cross origin whatver?
    // I get ping when submitting, but i get no contents back

    // also i have to npm-run-build every time?
    // i found npm-run-build makes clientside run on 8080? so tedious...


    }*/




  }

  return (
    <form method = 'POST' action = 'http://localhost:8080/api/altpost' className='field_box' onSubmit = {modifyItem} >
      <div>
        <label>Do you have a better title?</label>
        <input type='text'
                name='name'
                value={name}
                onChange={updateName}
                placeholder="Text Title"
                id='textTitle'
                />
      </div>

      <div>
        <label>We need better Alt Tags!!</label>
        <input type='text'
                name='description'
                value={description}
                onChange={updateDescription}
                placeholder="description"
                id='textBox'
                />
      </div>


      <button>Submit</button>
    </form>
  )
}


//finally works

    // setState( (previousState) => [previousState.slice(0, previousState.length - 1), {...state[state.length - 1], name: name }]);

// setState( (previousState) => [previousState.slice(0, -1), {...previousState[previousState.length - 1], name: name }])


export default AddToState;
