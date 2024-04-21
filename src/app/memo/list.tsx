import { StyleSheet, Text, View } from "react-native";
import MemoList from "../../components/MemoList";
import CircleButton from "../../components/CircleButton";
import Header from "../../components/Header";

export default function index() {
  return (
    <>
      <Header />
      <View style={container}>
        <MemoList />

        <CircleButton>+</CircleButton>
      </View>
    </>
  );
}

const { container } = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
  },
});
