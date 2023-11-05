import React from "react";
import Netflix from "./netfix";
import Amazon from "./amazon";

const favSeries="amazon";

const Favs = () =>{
  if(favSeries === "netflix")
  {
    return <Netflix />;
  }
  else{
    return <Amazon/>;
  }
};
export default Favs;