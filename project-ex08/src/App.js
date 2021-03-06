import React from 'react';

class App extends React.Component {
    render() {
        const message = 'Hello React';
        const h1style = {
            width: 200,
            height: 80,
            padding: 5,
            color: '#fff',
            backgroundColor: '#ee9900'
        };
        return (
            <h1 style={h1style}>{message}</h1>
        );
    }
}

export {App};