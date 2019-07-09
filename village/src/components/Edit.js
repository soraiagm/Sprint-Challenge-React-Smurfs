import React from "react"
import axios from "axios";

class Edit extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
      }

      componentDidMount() {
          const id = this.props.match.params.id
          axios.get(`http://localhost:3333/smurfs/${id}`)
            .then(response => {
                const { name, age, height } = response.data
                this.setState({
                    name, age, height
                })
            })
            .catch(err => {
                this.setState({
                    errorMessage: err.response.data.error
                })
            })
      }
  
      handleChange = (event) => {
          this.setState({
            [event.target.name]: event.target.value
          });
  
      }

      updateSmurf = () => {

      }

      deleteSmurf = () => {

      }
    
    
    render() {
        const { name, price, height } = this.state
        
        return (
          <form onSubmit={this.updateSmurf}>
              <h1 className="FormTitle">Edit Smurf</h1>
  
            <div className="TextForm">
              <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
              <input type="number" name="age" placeholder="Age" value={price} onChange={this.handleChange} />
              <input type="number" name="height" placeholder="Height" value={height} onChange={this.handleChange} />
  
              <button className="Button" type="submit">Save</button>
              <button onClick={this.deleteSmurf}>Delete</button>
            </div>
  
          </form>
        )
      }
}

export default Edit;