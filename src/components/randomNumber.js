import React from "react";


export default function RandomNumber()
{
    const refreshPage = ()=>{
        window.location.reload();  }

    let numberArray = [];

    for (let i = 0; i < 10; i++)
    {
        let myNum = Math.floor(Math.random() * 11)
        numberArray.push(<li> {myNum} </li>);
    }

    return (
        <div>
            <ul>
                {numberArray}
            </ul>

            <button onClick={refreshPage} type={"submit"}>Random</button>
        </div>
    );
}
