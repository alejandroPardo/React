var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI

//npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server


class App extends React.Component {
    render(){
        return (
            <div>
                Hello React Training!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

