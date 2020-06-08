import React from 'react'

/**
* @author
* @function Content
**/

const Content = (props) => {
  console.log('content render');
  return(
    <article>
      <h1>{props.title}</h1>
      {props.desc}
    </article>
   )

 }

export default Content