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
      <div className="pack">
        <p className="desc">{props.desc}</p>
        <p>
          <input className='button' type='button' name='button' value={props.button} onClick={function(e){
            e.preventDefault();
            props.onChangePage();
          }}></input>
        </p>
      </div>
    </header>
   )

 }

export default Subject