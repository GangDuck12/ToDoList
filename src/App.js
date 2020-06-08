import React,{ useState } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

function App() {
  console.log('app render');
  const [mode,setMode] = useState('view')
  const [seclected_content_id,setSelected_content_id] = useState();
  const [contents,setContents] = useState([
    {id:1, title:'1st', desc:'1st...'},
    {id:2, title:'2nd', desc:'2nd...'},
    {id:3, title:'3rd', desc:'3rd...'}
  ]);

  let _contents = null;
  let _title = null;
  let _desc = null;
  let _button = null;
  if(mode === 'view'){
    _button = 'modify';
    let i = 0;
    while(i < contents.length){
      let data = contents[i];
      if(data.id === seclected_content_id){
        _title = data.title;
        _desc = data.desc;
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
        <Content title={_title} desc={_desc}></Content>
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
        <Content title={_title} desc={_desc}></Content>
      </section>
    </div>
  }

  return (
    <div className="App">
      {_contents}
    </div>
  );
}

export default App; 