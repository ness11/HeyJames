import React from "react";
import Main from "../views/Main";

export default class MainContainer extends React.PureComponent {
  static navigationOptions = {
    header: null
  };

  state = {
    clicked: 0,
    isButtonVisible: false
  };

  updateMessage = message => {
    this.setState({
      clicked: this.state.clicked + 1,
      status: message
    });
  };

  backToZero = () => {
    this.setState({ clicked: 0 });
  };
  render() {
    const { navigate } = this.props.navigation;

    let message = "Not Clicked!";
    if (this.state.clicked) {
      message = this.state.status + " " + this.state.clicked + " times !";
      return [
        <Main
          updateMessage={this.updateMessage}
          clicked={this.state.clicked}
          backToZero={this.backToZero}
          message={message}
          visible={this.state.isButtonVisible}
          navigation={this.props.navigation}
        />
      ];
    }
    return (
      <Main
        updateMessage={this.updateMessage}
        clicked={this.state.clicked}
        backToZero={this.backToZero}
        message={message}
        navigation={this.props.navigation}
      />
    );
  }
}
