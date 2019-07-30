import React from 'react';
import axios from 'axios';

class SmurfForm extends React.Component {
    state = {
      name: '',
      age: '',
      height: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });

    }

    addSmurf = (event) => {
        event.preventDefault()

        const { name, age, height } = this.state
        const payload = { name, age, height }

        axios.post(`http://localhost:3333/smurfs`, payload)
          .then((response) => {
              console.log(response.data)
              this.setState({
                  errorMessage: null
              })
              
              this.setState({
                  errorMessage: null
              })
             
          })
          .catch((err) => {
              this.setState({
                errorMessage: err.response.data.error
              })
          })
    }

    render() {
      const { name, price, height } = this.state
      
      return (
        <form onSubmit={this.addSmurf}>
            <h1 className="FormTitle">Add New Smurf</h1>

          <div className="TextForm">
            <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
            <input type="number" name="age" placeholder="Age" value={price} onChange={this.handleChange} />
            <input type="number" name="height" placeholder="Height" value={height} onChange={this.handleChange} />

            <button className="Button" type="submit">Add</button>
          </div>

        </form>
      )
    }
}

export default SmurfForm;





  
//       axios
//       .post(`http://localhost.3333/smurfs`, this.state.newSmurf)
//       .then( response => {
//           this.setState({ smurfs: response.data })
//       })
//       .catch( err => console.log(err))
//     }

//     // this.setState({
//     //   name: '',
//     //   age: '',
//     //   height: ''
//     // });


//   handleInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//       <div className="SmurfForm">
//         <form onSubmit={this.addSmurf}>
//           <input
//             onChange={this.handleInputChange}
//             placeholder="name"
//             value={this.state.name}
//             type="text"
//             name="name"
//           />
//           <input
//             onChange={this.handleInputChange}
//             placeholder="age"
//             value={this.state.age}
//             type="number"
//             name="age"
//           />
//           <input
//             onChange={this.handleInputChange}
//             placeholder="height"
//             value={this.state.height}
//             type="number"
//             name="height"
//           />
//           <button onClick={this.addSmurf} value="submit" type="submit">Add to the village</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default SmurfForm;
