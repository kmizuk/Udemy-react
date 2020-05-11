import React from "react";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text"></input>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 13 },
    { name: "NONAME" },
  ];
  return (
    <div>
      {profiles.map((profile) => {
        return <User name={profile.name} age={profile.age} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      "にゃーー、{props.name}は{props.age}歳だにゃ"
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;
