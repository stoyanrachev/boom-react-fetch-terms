import { useState, useEffect } from "react";
const styleContent = {
    width: "50vw",
    height: "30vh",
    overflowY: "scroll",
}

function isBottom(element) {
    return element.target.offsetHeight + element.target.scrollTop === element.target.scrollHeight
}

export default function Document(props) {
    
    const trackScrolling = (element) => {
        if (isBottom(element)) {
            document.getElementById("button").disabled = false;
        } 
    };

    return (
        <section>
            <h1 className="title">{props.title}</h1>
            <p className="content" style={styleContent} onScroll={trackScrolling}>{props.content}</p>
            <button id="button" disabled>I Agree</button>
        </section>
    )
}
