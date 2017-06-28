var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI

//npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server


class Users extends React.Component {
  render() {
    var friends = this.props.list.filter(function (person){
      return person.friend === true;
    });
    var nonFriends = this.props.list.filter(function (person){
      return person.friend !== true;
    });
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(function (person, index){
            return <li key={index}>{person.name}</li>
          })}
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {nonFriends.map(function (person, index){
            return <li key={index}>{person.name}</li>
          })}
        </ul>        
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);
