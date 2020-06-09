import React,{ useState } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import Control from './components/Control';

function App() {
  console.log('app render');
  const [mode,setMode] = useState('view')
  const [seclected_content_id,setSelected_content_id] = useState();
  const [contents,setContents] = useState([
    {id:1, title:'1st', desc:'1st...', time:'00:00'},
    {id:2, title:'2nd', desc:'2nd...', time:'00:00'},
    {id:3, title:'3rd', desc:'3rd...', time:'00:00'}
  ]);

  let max_content_id=3;
  let _contents = null;
  let _title = null;
  let _desc = null;
  let _button = null;
  let _time = null;
  if(mode === 'view'){
    _button = 'modify';
    let i = 0;
    while(i < contents.length){
      let data = contents[i];
      if(data.id === seclected_content_id){
        _title = data.title;
        _desc = data.desc;
        _time = data.time;
        break;
      }

      i = i + 1;
    }
    _contents = 
    <div>
      <Subject title='To Do List' desc='Today to do' onChangePage={function(){
        setMode('modify');
      }} button={_button}></Subject>
      <section>
        <TOC data={contents} onChangePage={function(id){
          setSelected_content_id(Number(id));
        }}></TOC>
        <Content title={_title} desc={_desc} time={_time}></Content>
      </section>
    </div>
  }else if(mode === 'modify'){
    _button = 'view';
    let i = 0;
    while(i < contents.length){
      let data = contents[i];
      if(data.id === seclected_content_id){
        _title = data.title;
        _desc = data.desc;
        _time = data.time;
        break;
      }

      i = i + 1;
    }
    _contents = 
    <div>
      <Subject title='To Do List' desc='Today to do' onChangePage={function(){
        setMode('view');
      }} button={_button}></Subject>
      <section>
        <TOC data={contents} onChangePage={function(id){
          setSelected_content_id(Number(id));
        }}></TOC>
        <Content title={_title} desc={_desc} time={_time}></Content>
      </section>
      <Control onPagePlus={function(_title,_desc,_time){
        max_content_id = max_content_id + 1;
        let _contents = contents.concat(
          {id:max_content_id, title:_title, desc:_desc,time:_time }
        );
        setContents(_contents);
      }}
        onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              let _contents = Array.from(contents);
              let i = 0;
              while(i < _contents.length){
                if(_contents[i].id === seclected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                i = i + 1;
              }
              setMode('modify');
              setContents(_contents);
              alert('delete!!');
            }
          } else{
            setMode(_mode);
          }
        }}
      >

      </Control>
    </div>
  }

  return (
    <div className="App">
      {_contents}
    </div>
  );
}

export default App; 