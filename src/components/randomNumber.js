import React from "react";

export default function RandomNumber()
{
    const number = [];
    for( let i = 0; i < 10; i++)
    {
        let myNum = Math.floor(Math.random() * 11)
        number.push(<li> {myNum} </li>);
    }

    return number;
}
