// importing all the dependencies that we need
import React from "react";
import "./card-list.styles.css"
import {Card} from "../card/card.component"

//since we put the component Card to carea bout how th cards will look we have to import here so we can pass on the monsters
// we give the component a name where the first letters ara CapitalLetters
// adding the "props" meaning the properties/parameters for this component  and the cool thing is  we can add a child inside the component and we can call that by using props.children
//when we add a component inside another one while we import that one , we have to render that too because we have to pass the properties we want

export const CardList = (props) => (
     <div className="card-list">
         {props.monsters.map((monster) => (
             <Card key={monster.id} monster={ monster}/>
         ))}
    </div>
);
 

