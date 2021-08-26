import React from "react";
import { useState }  from "react";

let nameData = [{name:"joe"},{name:"jane"},{name:"jerry"}]


export const GreetingList = () => {
    const [greeted, setGreeted] = useState(nameData)
    const [inputText,setInputText] = useState("")

    class Person {
        name: any;
        constructor(name: string) {
        this.name = name;
    }
    }
  

    const handleAddName = (e: any) => {
        e.preventDefault()
        nameData.push(new Person(inputText))
        setGreeted(nameData)
        setInputText("")
    }

    const handleInputChange = (e: any) => {
        setInputText(e.target.value)
    }

    return(
    <>
        <h2>Greeting List</h2>
        <form onSubmit={handleAddName} action="">
        <label htmlFor="">Enter a name </label>
        <input value={inputText} placeholder="enter name here" onChange={handleInputChange} type="text"/>
        </form>
        {greeted.map((p)=>(
        <p>Welcome to unit testing {p.name}.</p>
        ))}
    </>
    )
}