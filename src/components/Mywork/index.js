import React, {useState, useContext, useEffect} from 'react';

import {StateContext} from '../Context';
import axios from 'axios';

function About() {
  //pulling out state
  const [state, setState] = useContext(StateContext);



  // console.warn(state,'state jhere')


  return (
    <div className="myComponent">



          <h1>My accomplishment</h1>
          {state.map((each, index) => (
              <div key = {index}>
                  <img src={each.primaryImage}></img>
                  <p>{each.name} {each.artistDisplayName !== '' ? `by ${each.artistDisplayName}`: ''}</p>
                  <p>{each.description !== '' ? `Alt created by you and the community!`: ''}</p>
                  <p>{each.description !== '' ? `${each.description}` : ''}
                  </p>
              </div>
          ))}

    </div>
  );
}

export default About;
//use to have this up there, but unneccesary i guess, since state-context is pulling from api/altpost and updating the state

// const [memory, setMemory] = useState([]);
// useEffect( () => {
//
// let dbStorage = '';
//
//   axios.get('http://localhost:8080/api/altpost')
//     .then(res => {
//
//       dbStorage = res.data
//
//       console.log(dbStorage,'retrived from dbstorage');
//     })
//     .catch(function (error) {
//       console.log(error, 'err found fetching from api/altpost');
//     });
//
// }, []);



//passing down the [state] and [setstate method]
// {
//   name: 'Cold winter ocean',
//   artistDisplayName: 'Oil painting',
//   artistNationality: 'sample',
//   objectDate: 'sample',
//   medium: 'sample',
//   description: 'sample',
//   objectName: 'sample',
//   primaryImage: 'sample',
//   objectName: 'sample',
//   id: 'sample',
//   tags: 'sample'
// }



// <h1>Collective work!</h1>
// <img src={dbStorage.primaryImage}></img>
// <p>{dbStorage.name} {dbStorage.artistDisplayName != '' ? `by ${dbStorage.artistDisplayName}`: ''}</p>
// <p>Alt created by you!</p>
// <p>{dbStorage.tags}</p>
