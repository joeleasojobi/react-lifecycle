import { Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

const Lifecyclefn = () => {

    const [name,setName]=useState("Joel")
    const [age,setAge]=useState(12)

    //component did mount

    useEffect(
       ()=>{
           console.log("Page First Time loaded");
       },[]
    )

    //component did update

    useEffect( ()=>{
        console.log("Name changed");

    },[name] )

    useEffect( ()=>{
        console.log("Age changed");

    },[age] )

    //component will unmount

    useEffect(()=>{
        return()=>{

        }
    },[] )

    const changeMyName=()=>{
        setName("Akhil")
    }
    const changeMyAge=()=>{
        setAge("45")
    }

    return(  <div>
        hello
        <Typography>{name}</Typography>
        <Typography>{age}</Typography>
        <Button color="primary" variant="outlined" onClick={changeMyName} >Change My Name</Button>
        <Button color="primary" variant="outlined" onClick={changeMyAge} >Change My Age</Button>
    </div>
  )
}

export default Lifecyclefn