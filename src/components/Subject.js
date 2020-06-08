import React from 'react'

/**
* @author
* @function Subject
**/

const Subject = (props) => {
  console.log('subject render');
  return(
    <header>
      <h1>{props.title}</h1>
      {props.desc}
      <p>
        <input className='button' type='button' name='button' value={props.button} onClick={function(e){
          e.preventDefault();
          props.onChangePage();
        }}></input>
      </p>
    </header>
   )

 }

export default Subject