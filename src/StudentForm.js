import React, { Component } from 'react'


class StudentForm extends Component {


  // handleSubmit() {
  //
  // }

  state = {
    input: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    /// tell our parent
    this.props.onAdd(this.state.input)
    this.setState({
      input: ""
    })
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInputChange} value={this.state.input} />
        <input type="submit" value="Add Student"/>
      </form>
    )
  }
}


export default StudentForm
