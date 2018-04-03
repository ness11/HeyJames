import { StackNavigator } from "react-navigation";
import MainScreen from "./src/components/container/MainContainer";
import ElementListScreen from "./src/components/container/ElementListContainer";

console.ignoredYellowBox = [
  "Remote debugger",
  "Warning: Each child",
  "Warning",
  "VirtualizedList",
  "Unable to"
];

const App = StackNavigator({
  Main: {
    screen: MainScreen
  },
  ElementList: {
    screen: ElementListScreen
  }
});
export default App;
