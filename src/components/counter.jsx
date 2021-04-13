import React,  { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (<>
    <span className={getBadgeClasses(count)}>{count ? count : 'Zero'}</span>
    <button className="btn btn-secondary btn-sm">+</button>
    </>);
}

function getBadgeClasses(count) {
    let classes = "badge m-2 badge-";
    classes += count ? "primary" : "warning";
    return classes;
}
 
export default Counter;
