import React from 'react';

const renderFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];

const Key = () => {
    let jsFramework = renderFrameworks.map(framework => 
        <li key={framework}>{framework} </li>
    )
    console.log(jsFramework)
    return (
        <div>
            <h1>JS Frontend Frameworks</h1>
            <ul>{jsFramework}</ul>
        </div>
    )
}
export default Key;