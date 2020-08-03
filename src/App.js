import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

function App() {

  var logoStyles ={
    display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: 'auto',
     marginBottom: 'auto',
     justifyContent: 'center',
     width: '100%',
   }

  class Test extends React.Component {
  constructor(){
         super();

         this.state = {
              black: true
         }
    }

    changeColor(){
        this.setState({black: !this.state.black})
    }

    render(){
        let color = this.state.black ? "blackButton" : "whiteButton";

        return (
             <div className={color}  style={logoStyles}>
                 <button className={color}
                         onClick={this.changeColor.bind(this)}>
                           Click Here For Relief.....
                  </button>
             </div>
        )
    }
}

ReactDOM.render(<Test />, document.querySelector("#app"))

  return (
    <div className="App">

    </div>
  );
}

export default App;
