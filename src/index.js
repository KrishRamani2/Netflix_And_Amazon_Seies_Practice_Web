import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Cards'
import './index.css'
import Sdata from './Sdata'
import Netflix from './netfix'
import amazon from './amazon';
import Favs from './condition'
import './App'
import Amazon from './amazon'
import ncard from './App'

const favSeries="Amazon"
ReactDOM.render(
   <>
    <div>
      {Sdata.map(ncard)}
   {/*<Favs / >
   {(favSeries === "netflix")?<Netflix />:<Amazon/>}*/}
   </div>
 </>,document.getElementById('root')
);