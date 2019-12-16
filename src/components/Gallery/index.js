import React from 'react';
// we want to use state -> work with function component ->
import {useState, useEffect} from 'react';
// import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom';

import uuid from 'react-uuid';

//useEffect - when component mounts - fetch call
//useState - holds the data retrieved from fetching

// https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg

//https://collectionapi.metmuseum.org/public/collection/v1/search?q=hasImages

// https://collectionapi.metmuseum.org/public/collection/v1/search?q=ocean

// https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=ocean

function Gallery(props) {
  // const dispatch = useDispatch();


  useEffect( () => {
    fetchIds()

  }, []);  //[] run when component mounts

  const [theArray, setTheArray] = useState([]); //datastorage

  const ids = [];
  // console.log(this.props);


  let [search, setSearch] = useState('');

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const searchReady = (e) => {
    e.preventDefault();

    fetchIds()

    // console.log(document.getElementById('message').textContent,'txt content')
    document.getElementById('message').textContent = search
    // console.log(search);  //setting done
    //
    setSearch('');

  }

  // search = '';
  const fetchIds = async() => {

    if (search === '') {
        search = 'ocean'
    }

    // need to change the ocean part
    const data = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${search}`);

    // console.log(data);

    const idNumber = await data.json();

    // console.log(idNumber.objectIDs)
    if(idNumber.objectIDs === null) {
      return;
    } else {
      //push all ids - 280 or so
      // idNumber.objectIDs.forEach((each)=>{
      //   ids.push(each)
      // })

      //push just 20
      for (let i = 0; i < 10; i ++) {
        ids.push(idNumber.objectIDs[i])
      }

      fetchItem();  //after the ids are pushed
    }
  }

  const fetchItem = async() => {
    ids.forEach(async(each)=>{
      const data = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${each}`);
      const items = await data.json();

      console.log('10 new retrieved artworks',items);
      // console.log(items.primaryImageSmall);

      setTheArray((oldArray) => [...oldArray, {
        img:items.primaryImageSmall,
        uuid:items.objectID,
        alt:items.tags,
        title:items.title,
        period:items.period,
        artist:items.artistDisplayName,
        medium:items.medium
      }]);
      // console.log(items)
    })


  }

  // let gall = document.querySelector('.gallery');
  // console.log(gall);
  //hmm

  return (
    <div className="myComponent">

        <div className='gallery'>

            <form className='field_box' onSubmit = {searchReady}>
                <h3>Welcome to the Met Museum Gallery!</h3>
                <br/>
                <legend>Search Images from Met Museum:</legend>
                <input id="searchBox" type='text' name='search' value={search}
                onChange={updateSearch} placeholder='anything!'/>
                <button>Submit</button>
                <p id='message'></p>
            </form>

            {theArray.map((each, index) => (
                <div  key ={uuid()} >
                  <Link key = {uuid()} to={`/artwork/${each.uuid}`}>
                    <img src={each.img} alt={each.alt}></img>
                    <p>{each.img !== ''? '': 'image does not exist for this artwork or error'}</p>
                    <div className='glass'>
                      <p>{each.title} {each.artist ? `by ${each.artist}`: ''}</p>
                      <p>{each.alt !== '' ? `alt TAGS! : ${each.alt}` : 'No alt tags on this artwork'}</p>
                    </div>


                  </Link>
                </div>
            ))}
        </div>

    </div>
  );
}

export default Gallery;
