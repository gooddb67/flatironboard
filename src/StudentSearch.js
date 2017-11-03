import React, {Component} from 'react'

class StudentSearch extends React.Component {

  state = {
    input: ''
  }


  handleInput = (event) => {
    var value = event.target.value;
    this.setState({
      input: value
    })
    this.props.onSearch(value)
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" placeholder="Search for Student" onChange={this.handleInput} value={this.state.input}  />
        </form>
      </div>
    );
  }
}

export default StudentSearch
