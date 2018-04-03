import React from "react";
import ElementList from "../views/ElementList";

export default class ElementListContainer extends React.PureComponent {
  state = {
    list: [
      "Banane",
      "Pomme",
      "Fraise",
      "Cerise",
      "Raisin",
      "Poire",
      "Pêche",
      "Abricot",
      "Kiwi",
      "Ananas",
      "Pastèque",
      "Orange",
      "Clémentine",
      "Citon"
    ]
  };
  removeItem = item => {
    console.log(item);
    const removeItem = [...this.state.list];
    let index = null;
    for (let i = 0; i < removeItem.length; i++) {
      if (item === removeItem[i]) {
        removeItem[i].quantity = removeItem[i].quantity - 1;
        index = i;
      }
    }
    removeItem.splice(index, 1);

    this.setState({
      list: removeItem
    });
  };

  render() {
    return (
      <ElementList
        removeItem={this.removeItem}
        navigation={this.props.navigation}
        list={this.state.list}
      />
    );
  }
}
