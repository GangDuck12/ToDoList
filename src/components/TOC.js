import React from 'react'

/**
* @author
* @function TOC
**/

const TOC = (props) => {
  console.log('toc render');

  let lists = [];
  let data = props.data;
  let i = 0;
  while(i < data.length){
    lists.push(<li key={data[i].id}><a href={'/contents/'+data[i].id} data-id={data[i].id} onClick={function(e){
      e.preventDefault();
      props.onChangePage(e.target.dataset.id);
    }}>{data[i].title}</a></li>);
    i = i + 1;
  }

  return(
    <nav>
      <ul>
        {lists}
      </ul>
    </nav>
   );

 }

export default TOC