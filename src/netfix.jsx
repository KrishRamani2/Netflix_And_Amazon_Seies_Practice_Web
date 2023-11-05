import React from 'react'
import ReactDOM  from 'react-dom'
import Card from './Cards';
import Sdata from './Sdata';


const Netflix = () =>{
    return(
        <div>
        <Card
    key={Sdata[0].id}
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].link}
  />
  <Card
    key={Sdata[1].id}
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].link}
  />
  <Card
    key={Sdata[2].id}
    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].link}
  />
  <Card
    key={Sdata[3].id}
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].link}
  />
  <Card
    key={Sdata[4].id}
    imgsrc={Sdata[4].imgsrc}
    title={Sdata[4].title}
    sname={Sdata[4].sname}
    link={Sdata[4].link}
  />
  </div>
    );
}

export default Netflix;