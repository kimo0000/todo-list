import React from 'react'

const ListItem = ({items, deleteItem}) => {

   const Listeitem = items.length 
                                  ? items.map(item => {
                                            return (
                                                     <div key={item.id}>
                                                        <span className="name">{item.name}</span>
                                                        <span className="age">{item.age}</span>
                                                        <button className="action" onClick={() => deleteItem(item.id)}>X</button>
                                                     </div>)})
                                  : (<p>this is no item to show</p>)


  return (
    <div className="listeItem">
        <span className="name title">Nom</span>
        <span className="age title">Age</span>
        <span className="action title">Action</span>
        {Listeitem}
    </div>
  )
}

export default ListItem