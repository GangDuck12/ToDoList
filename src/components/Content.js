import React,{memo} from 'react'

/**
* @author
* @function Content
**/

const Content = (props) => {
  console.log('content render');
  return(
    <article>
      <h1>{props.title}</h1>
      <p>
        {props.time}
      </p>
      <p>
        {props.desc}
      </p>  
    </article>
   )

 }

export default memo(Content);