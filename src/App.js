
import './App.css';
import Card from './Cards';


function ncard(val,index){
  console.log(val)
  return(
    <Card
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  );
}

export default ncard;
