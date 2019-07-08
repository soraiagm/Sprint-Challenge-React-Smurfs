import React from 'react';
// import ReactDOM from "react-dom";
import { Route, Link  } from "react-router-dom";
import axios from "axios";
import Home from './components/Home';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import './App.css';



class App extends React.Component {
   state = {
     smurfs: []
   }

   componentDidMount() {
     axios.get(`http://localhost:3333/smurfs`)
        .then(response => {
            this.setState({
              smurfs: response.data
            })
        })
        .catch(err => {
            console.log(err) 
        })


    
   }


    render() {
      const { smurfs } = this.state

        return (
          <div className="App">
            <nav>
              <h1>Smurfs</h1>
                <div className="nav-link">
                  <Link to="/">Home</Link>
                  <Link to="/smurfs">Smurfs</Link>
                  <Link to="/smurf-form">Add Smurf</Link>
                </div>
            </nav>
              <Route path="/" exact render={(props) => <Home smurfs={smurfs} /> } />
              
              <Route path="/smurfs" render={ (props) => <Smurfs {...props} smurfs={this.state.smurfs} />} /> 
              {/* <Route path="/smurfs" exact render={(props) => <Smurfs {...props} smurfs={data} /> } /> */}
              
              <Route path="/smurf/:id" render={ (props) => <Smurf {...props} smurfs={this.state.smurfs} />} />             
              {/* <Route path="/smurf/:id" exact render={(props) => <Smurf {...props} smurfs={data} /> } /> */}
              
              <Route path="/smurf-form" render={ (props) => <SmurfForm {...props} smurfs={this.state.smurfs} />} />
              {/* <Route path="/smurfForm" exact render={(props) => <SmurfForm {...props} smurfs={data} /> } /> */}
          </div>
         )};
      }

export default App;


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       smurfs: [],
//       newSmurf: {
//         name: '',
//         age: '',
//         height: '',
//       }      
//     };
//   }

//   componentDidMount= () => {
//     axios
//     .get(`http://localhost:3333/smurfs`)
//     .then( response => {
//         this.setState({ smurfs: response.data })
//     })
//     .catch( err => console.log(err))
//   }


//   // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
//   // Notice what your map function is looping over and returning inside of Smurfs.
//   // You'll need to make sure you have the right properties on state and pass them down to props.
//   render() {
//     return (
//       <div className="App">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/smurf-form">Smurfs</Link>
//           </li>
//         </ul>
      

//         {/* <SmurfForm smurfs={this.state.smurfs} /> */}
//     <Route path="/" render={props => <SmurfForm {...props} smurfs={this.state.smurfs} />} />
//     <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
//       </div>
//     );
//   }
// }

// 
