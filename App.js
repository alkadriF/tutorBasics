import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  state = { placeName: "", placeNames: [] };
  masuk = () => {
    const placeNames = this.state.placeNames.slice();
    placeNames.push(this.state.placeName);
    this.setState({ placeNames: placeNames });
  };
  deleteThisRow = (index) => {
    var arrNew = this.state.placeNames.slice();
    arrNew.splice(index, 1);
    this.setState({placeNames: arrNew});
  }

  render() {
    return (
      <View>
        <View style={stylex.Gegayaan}>
          <TextInput
            placeholder="Search"
            style={stylex.GayaTeks}
            onChangeText={placeName => {
              this.setState({ placeName: placeName });
            }}
          />

          <Button
            title="hantam!"
            style={stylex.hantamStyle}
            onPress={this.masuk}
          />
        </View>
        <View
          style={[
            stylex.Gegayaan,
            { flexDirection: "column" },
            { paddingLeft: "5%" }
          ]}
        >
        {this.state.placeNames.map((items, index) =>
        (<TouchableOpacity onPress={this.deleteThisRow.bind(this, index)}><Text>{items}</Text></TouchableOpacity> ))}
        </View>
      </View>
    );
  }
}

const stylex = StyleSheet.create({
  Gegayaan: {
    paddingTop: 20,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row"
  },
  hantamStyle: {
    width: "30%"
  },
  GayaTeks: {
    color: "red",
    width: "70%"
  }
});
