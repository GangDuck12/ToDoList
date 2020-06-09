import React,{ useState } from 'react'

/**
* @author
* @function Control
**/

const Control = (props) => {

    const [time,setTime] = useState('');

  return(
    <aside>
        <input type="button" value="Delete" onClick={function(e){
         e.preventDefault();
         props.onChangeMode('delete');   
        }}></input>
        <form action="/" method="post" onSubmit={function(e){
            e.preventDefault();
            props.onPagePlus(
                e.target.title.value,
                e.target.desc.value,
                e.target.time.value
            );
        }}>
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="desc" placeholder="description"></textarea></p>
            <p>
                <input 
                    name="time" 
                    type="time"
                    onChange={function(e){
                        setTime(e.target.value);
                    }} 
                    value={time} 
                    min="00:00" 
                    max="23:59">
                </input>
            </p>
            <p><input type="submit"></input></p>
        </form>
    </aside>
   )

 }

export default Control