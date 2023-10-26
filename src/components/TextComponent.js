import React from 'react'
import '../style/TextComponent.css'


const TextComponent = (props) => {
    return (
        <>
        <div className={props.name}>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.paragraph}
            </p>
        </div>

        </>


    )

}

export default TextComponent