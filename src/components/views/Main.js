import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class Main extends React.PureComponent {
  // static navigationOptions = ({ navigation }) => ({
  //   title: navigation.state.params.name
  // });

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    const { navigate } = this.props.navigation;

    return [
      <View style={style.mainView}>
        <View style={style.view}>
          <Text>{this.props.message}</Text>
        </View>
        <View style={style.button}>
          <View style={{}}>
            <Button
              color={
                this.props.clicked === 1
                  ? "yellow"
                  : this.props.clicked === 2
                    ? "green"
                    : this.props.clicked >= 3 ? "red" : null
              }
              onPress={() => this.props.updateMessage("Clicked")}
              title="Click here"
            />
          </View>
          <View style={{}}>
            {this.props.clicked >= 3 ? (
              <Button
                onPress={() => this.props.backToZero()}
                title="click me too"
              />
            ) : null}
          </View>
          <View style={{}}>
            <Button
              title="ElementList"
              onPress={() =>
                navigate("ElementList", {
                  name: "ElementList"
                })
              }
            />
          </View>
        </View>
      </View>
    ];
  }
}

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 15
  },
  view: {
    alignItems: "center"
  },
  button: { flexDirection: "row-reverse" }
});
