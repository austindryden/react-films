import React, { useLayoutEffect } from "react";



function _handleClick(){
    console.log("clicky clicky");
}

function _handleMouseOver(){
    console.log("thingy has been moused over");
}

class MovieList extends React.Component {

render(){

    return(
        <ul>
            <li onClick={_handleClick}>The Witch</li>
            <li onMouseOver={_handleMouseOver} >The Lighthouse</li>
            <li>Parasite</li>
            <li>The Dead Don't Die</li>
            <li>It Follows</li>
            <li>The Fifth Element</li>
            <li>John Carpenters Halloween</li>
            <li>Drive</li>
        </ul>

    );
}
}
export default MovieList;