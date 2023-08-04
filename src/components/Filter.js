import React from "react";
import {useSearchParams} from 'react-router-dom'

export default function Filter(){
    const [searchParam,setSearchParam]=useSearchParams();
    const age= searchParam.get('age');
    console.log(age);
    return(
        <>
            <h1>Filter page</h1>
            <h3>Age is: {age}</h3>

        </>
    )
}