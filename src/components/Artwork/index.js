import React from 'react';
// we want to use state -> work with function component ->
import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';

import AddToState from '../AddToState';
import Myobject from '../Myobject';
import uuid from 'react-uuid';

//trying here
import {StateContext} from '../Context';  //also need to change the stateContext so

function Artwork({match}) {    //we can use props calle d '{match}' bc we used <Link>

  useEffect( () => {
    fetchItem();

  }, []);  //[] run when component mounts

  const [state, setState] = useContext(StateContext);

  const [item, setItem] = useState([]); //datastorage

  const ids = [];

  const fetchItem = async() => {
    const data = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${parseInt(match.params.id)}`);

    const item = await data.json();
    // console.log(item)

    setItem(item);

    setState( (previousState) => [...previousState, {
      name: item.title,
      artistDisplayName: item.artistDisplayName,
      artistNationality: item.artistNationality,
      objectDate: item.objectDate,
      tags: item.tags,
      medium: item.medium,
      objectName: item.objectName,
      primaryImage: item.primaryImage,
      id: match.params.id
    }] );     //okay set the state

  }
  console.log(match,'match');
  return (
    <div className="myComponent">
      <h1>Artwork</h1>

      <p className="paras">The artwork you've chosen is called {item.title != '' ? `${item.title}. ` : 'Unknown'}

      {item.artistDisplayName != '' ? `This was made by an artist (or artists) named ${item.artistDisplayName}. ` : 'The artist of this work is unknown. '}

      {item.artistNationality != '' ? `The artist is from  ${item.artistNationality}. `: ''}

      {item.objectDate != '' ? `It was created in (or around)  ${item.objectDate}. `: ''}

      {item.medium != '' ? `Medium of this work is  ${item.medium}. `: ''}

      {item.objectName != '' ? `Please take a close look at  ${item.objectName} and add (detailed) description to this artwork. `: ''}


      </p>

      <div className='imageContainer'>
        <img src = {item.primaryImage} alt = {item.tags} className='largeImage'></img>
        <Myobject key = {uuid()}/>
        <AddToState key = {uuid()}/>

      </div>
    </div>
  );
}
//tackle myobject -- > from there to
// <Item each = {state.slice(-1)}  />
export default Artwork;

    // <div class="field_box">
    //   <label for="name">Title</label>
    //   <input class="field_input"
    //           type="name"
    //           name="name"
    //           placeholder="Text Title"
    //           id='textTitle'
    //
    //           >
    // </div>

    //
    // #textBox{
    //   width:200px;
    //   height:200px;
    // }
    // #textTitle{
    //   width:200px;
    //   height:100%;
    // }
    //
    //
    // .field_box {
    //   display: flex
    //   /* background-color: blue; */
    // }
    // .field_box label{
    //   flex-basis: 20%;
    //   /* background-color: blue; */
    // }


    // <h2>Title: {item.title != '' ? item.title : 'Unknown'}</h2>
    // <h3>Artist: {item.artistDisplayName != '' ? item.artistDisplayName : 'Unknown'}</h3>
    // <h5>{item.artistNationality != '' ? `Artist Nationality ${item.artistNationality}`: ''}</h5>
    // <h5>{item.objectDate != '' ? `Date: ${item.objectDate}`: ''}</h5>
    // <h5>{item.medium != '' ? `Medium: ${item.medium}`: ''}</h5>
    // <h5>{item.objectName != '' ? `Object Name: ${item.objectName}`: ''}</h5>
