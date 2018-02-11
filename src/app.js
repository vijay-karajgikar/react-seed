import React from 'react';
import ReactDOM from 'react-dom';

class ReactSeed extends React.Component {
    render() {
        return (
            <div>
                <h1>React Component</h1>
            </div>
        );
    }
}

ReactDOM.render(<ReactSeed />, document.getElementById('app'));