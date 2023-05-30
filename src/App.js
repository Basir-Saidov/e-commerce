import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
      {
        id: 1,
        title: 'Чёрный телефон',
        price: '199.99',
        category: 'black-phone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit sollicitudin dignissim maximus. Fusce.',
        image: 'black.jpg'
      },
      {
        id: 2,
        title: 'Белый телефон',
        price: '199.99',
        category: 'white-phone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit sollicitudin dignissim maximus. Fusce.',
        image: 'white.jpg'
      },
      {
        id: 3,
        title: 'Серый телефон',
        price: '199.99',
        category: 'grey-phone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit sollicitudin dignissim maximus. Fusce.',
        image: 'grey.jpg'
      },
      {
        id: 4,
        title: 'Фиолетовый телефон',
        price: '199.99',
        category: 'purple-phone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit sollicitudin dignissim maximus. Fusce.',
        image: 'purple.jpg'
      },
      {
        id: 5,
        title: 'Красный телефон',
        price: '199.99',
        category: 'red-phone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt velit sollicitudin dignissim maximus. Fusce.',
        image: 'red.jpg'
      },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;