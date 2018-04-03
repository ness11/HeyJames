import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Main from "../views/Main";
import Icon from "react-native-vector-icons/Ionicons";

export default class MainContainer extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <FlatList
        data={this.props.list}
        renderItem={({ item }) => (
          <View style={style.list}>
            <Text style={style.text}>{item}</Text>
            <Icon
              name="md-close"
              size={32}
              onPress={() => {
                this.props.removeItem(item);
              }}
            />
          </View>
        )}
      />
    );
  }
}

const style = StyleSheet.create({
  list: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 30,
    paddingBottom: 30
  }
});
