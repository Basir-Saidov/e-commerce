import React, { Component } from 'react'
import { MdDelete } from 'react-icons/md';

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.image} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <MdDelete className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order