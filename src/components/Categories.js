import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все телефоны'
                },
                {
                    key: 'black-phone',
                    name: 'Чёрные телефоны'
                },
                {
                    key: 'white-phone',
                    name: 'Белые телефоны'
                },
                {
                    key: 'grey-phone',
                    name: 'Серые телефоны'
                },
                {
                    key: 'purple-phone',
                    name: 'Фиолетовые телефоны'
                },
                {
                    key: 'red-phone',
                    name: 'Красные телефоны'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories