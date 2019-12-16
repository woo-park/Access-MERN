import React, {useState, useEffect, createContext} from 'react';

// exporting 2 things here, so no default

// creates our front db
export const StateContext = createContext();


// component, so we have to return ()
export const StateProvider = (props) => {


    const [state, setState] = useState([
        ])

    useEffect( () => {


          // async function fetching (url) {
          //   fecth(url)
          //   .then((response)=>{
          //     if(response != []){
          //       return response.json()
          //     }
          //   })
          // }
          fetch(`http://wooyongpark/api/altpost`)
            .then( (response) =>{
              console.log('Where client state, and db just polled');
              let result;
              if(response != []) {
                result = response.json();
                console.log(result,'result here');

              }
              return result
            })
            // .then(data => {console.log(data,'nothin found?')})
            .then(result=>{

              result.forEach(each => {
                console.log(each,'EACH')
                setState((preState) => [...preState, each]  );
                // setState((oldArray) => [...oldArray, each]);
              })




          })


          // need to set to my state now -> ->

          // fetch(`http://localhost:3001/api/gadgets?gadgetType=${this.state.filterVal}`)
          //   .then(response => response.json())
          //   .then(data => this.setState({gadgets: data}));
          //
          // setState( (previousState) => [...previousState, {
          //   name: 'Empty',
          //   artistDisplayName: 'item.artistDisplayName',
          //   artistNationality: 'item.artistNationality',
          //   objectDate: 'item.objectDate',
          //   tags: 'item.tags',
          //   medium: 'item.medium',
          //   objectName: '',
          //   primaryImage: '',
          //   id: 'match.params.id'
          // }] );     //okay set the state

    }, []);  //[] run when component mounts
    console.log(state,'when first begins')


  return (
    <StateContext.Provider value = {[state, setState]}>
      {props.children}
    </StateContext.Provider>
  );
}

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
