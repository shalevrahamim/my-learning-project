import React, { useState, useEffect } from 'react';
let i = 0;
const Exapmle = () => {
    const [fullName, setFullName] = useState({ name: 'name', familyName: 'family', a:i });
    const [title, setTitle] = useState('useEffect() in Hooks');

    useEffect(() => {
        console.log('use', fullName.name);
        setFullName({ name: 'shalev'+i, familyName: 'Shaw' });
        console.log('use', fullName.name);
        
    }, [fullName.a]);

    const clicked = () => {
        i++
        console.log(fullName.name);
        setFullName({...fullName, name: 'shalev', a:0});
        console.log(fullName.name);
    }

    return (
        <div>
            <button onClick={clicked}>click me</button>
            <h1>Title: {title}</h1>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
        </div>
    );
}

export default Exapmle