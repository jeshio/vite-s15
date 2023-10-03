import { useState } from "react"
import { useEffect } from "react"

const HomePage = () => {

    const [facts, setFacts] = useState([]) 

    useEffect(() => {
        fetch("https://cat-fact.herokuapp.com/facts")
        .then((r) => {
        return r.json() 
    })
        .then(r => {
            setFacts(r)
        })
    }, [])

    console.log('facts:', facts)

    return (
        <div>
            <h1> Cat Facts </h1>
            <div className="catfacts">
            <h2>
                {facts.map(facts => (
                    <li>{facts.text}</li>
                ))}
            </h2></div>
        </div>
    )
}

export {HomePage}