import React from 'react'
import '../style/WordBanner.css'

function WordBanner(props) {
  return (
    <>

    <div className={props.word_banner}>

        <div className={props.inner_banner}>
            <h4>
                {props.contents}

            </h4>
            <p>
                {props.saint_name}
            </p>
        </div>

    </div>



    </>
  )
}

export default WordBanner