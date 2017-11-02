import React, { Component } from 'react'


class StudentCard extends Component {

  handleClick = (event) => {

    this.props.handleRemove(this.props.student)
    /// to tell my parent about it
    // how can i get the students name
  }
  render() {
    return (
      <li onClick={this.handleClick}>{this.props.student}</li>
    )
  }
}

export default StudentCard
