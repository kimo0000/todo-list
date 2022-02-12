import React, { Component } from 'react';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

class App extends Component {

   state = {
     items : [
       {id: 1, name: "ahmed", age: 22},
       {id: 2, name: "karim", age: 25},
       {id: 3, name: "ikhlas", age: 27},
     ]
   }


   deleteItem = (id) => {
      const items = this.state.items.filter(item => item.id !== id);
      this.setState({items})
   }


   AddItem = (item) => {
         item.id = Math.random();
         const items = this.state.items;
         items.push(item);
         this.setState({items})
   }


  render () {
      return (
         <div className="container">
            {this.warningMsg}
            <h1>TODO LIST</h1>
             <ListItem items={this.state.items} deleteItem={this.deleteItem}/>
             <AddItem AddItem={this.AddItem}/>
         </div>
    );
  }
}

export default App;
