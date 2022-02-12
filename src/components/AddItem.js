import React, { Component } from 'react';

class AddItem extends Component {

   state = {
       name: '',
       age: ''
     }
     

   HandleChange = (e) => {
      this.setState({
        [e.target.id] : e.target.value
      })
   }

   HandleSubmit = (e) => {
     e.preventDefault();
     if(e.target.name.value && e.target.age.value !== ''){
       this.props.AddItem(this.state);
       this.setState({name: '', age: ''})
       }else {
         return false
       }
   }


render () {
   return (
      <div>
        <form onSubmit={this.HandleSubmit}>
          <input type='text' placeholder='name...' id='name' value={this.state.name} onChange={this.HandleChange} />
          <input type='number' placeholder='age...' id='age' value={this.state.age}  onChange={this.HandleChange} />
          <button>Add</button>
        </form>
      </div>
  )
}
}

export default AddItem