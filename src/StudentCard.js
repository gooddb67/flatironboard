import React, { Component } from 'react'


class StudentCard extends Component {

  handleClick = (event) => {

    this.props.handleRemove(this.props.student)

  }
  render() {
    return (
      <li onClick={this.handleClick}>{this.props.student}</li>
    )
  }
}

export default StudentCard
