import React, { Component } from 'react'
import StudentList from './StudentList'
import StudentForm from './StudentForm'


class StudentContainer extends Component {


  state = {
    students: ["johann", "daniel", "terrance"]
  }


  removeStudent = (name) => {
    const newStudents = this.state.students.filter((student) => {
      return student !== name
    })
    this.setState({
      students: newStudents
    })
  }


  addStudent = (name) => {
    this.setState({
      students: [...this.state.students, name]
    })
  }

  render() {
    return (
      <div>
        <StudentForm onAdd={this.addStudent}/>
        <StudentList onRemove={this.removeStudent} students={this.state.students}/>
      </div>
    )
  }
}

export default StudentContainer
