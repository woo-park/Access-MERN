import React, {useState} from 'react';

const Item = (props) => {
    console.log(props.each.tags,'tags alt!!!!!')
  return(
    <div>
        <h3><span className='left_align'>Title</span> : {props.each.name}</h3>
        <p><span className='left_align'>Alt Tags</span> : {props.each.tags}</p>
        <p><span className='left_align'>description</span> : {props.each.description}</p>

        <p><span className='left_align'>Object ID number(MET)</span> : {props.each.id}</p>
        {/*<p>{props.each.artistDisplayName}</p>*/}
        {/*<p>{props.each.artistNationality}</p>*/}
        {/*<p>{props.each.objectDate}</p>*/}
        {/*<p>{props.each.medium}</p>*/}
        {/*<p>{props.each.objectName}</p>*/}
        {/*<p>{props.each.primaryImage}</p>*/}
        {/*<p>{props.each.objectName}</p>*/}


    </div>
  );
}

export default Item;
