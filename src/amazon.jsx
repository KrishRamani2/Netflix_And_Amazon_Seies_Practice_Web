import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Amazon = ()=>{
    return(
        <div>
        <Card
    key={Sdata[5].id}
    imgsrc={Sdata[5].imgsrc}
    title={Sdata[5].title}
    sname={Sdata[5].sname}
    link={Sdata[5].link}
  />
  <Card
    key={Sdata[6].id}
    imgsrc={Sdata[6].imgsrc}
    title={Sdata[6].title}
    sname={Sdata[6].sname}
    link={Sdata[6].link}
  />
  <Card
    key={Sdata[7].id}
    imgsrc={Sdata[7].imgsrc}
    title={Sdata[7].title}
    sname={Sdata[7].sname}
    link={Sdata[7].link}
  />
  <Card
    key={Sdata[8].id}
    imgsrc={Sdata[8].imgsrc}
    title={Sdata[8].title}
    sname={Sdata[8].sname}
    link={Sdata[8].link}
  />
  <Card
    key={Sdata[9].id}
    imgsrc={Sdata[9].imgsrc}
    title={Sdata[9].title}
    sname={Sdata[9].sname}
    link={Sdata[9].link}
  />
  </div>
    );
}

export default Amazon;