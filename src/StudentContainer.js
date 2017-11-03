import React, { Component } from 'react' //import react components
import StudentList from './StudentList'//import studentList component
import StudentForm from './StudentForm'//import student form component
import StudentSearch from './StudentSearch'


class StudentContainer extends Component {//declare component


  state = {
    students: []
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

  searchStudents = (name) => {
    const searchStudents = this.state.students.filter((student)=>{
      return student.includes(name)
    })
    this.setState({
      students: searchStudents
    })
  }

  render() {
    return (
      <div>
        <StudentForm onAdd={this.addStudent}/>
        <StudentSearch onSearch={this.searchStudents}/>
        <StudentList onRemove={this.removeStudent} students={this.state.students}/>
      </div>
    )
  }
}

export default StudentContainer
