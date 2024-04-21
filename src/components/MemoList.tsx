import { View, Text, StyleSheet } from "react-native";

export default () => {
  return (
    <View>
      <View style={memoItem}>
        <View>
          <Text style={memoItemTitle}>買い物リスト</Text>
          <Text style={memoItemDate}>2024/04/24 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
      <View style={memoItem}>
        <View>
          <Text style={memoItemTitle}>買い物リスト</Text>
          <Text style={memoItemDate}>2024/04/24 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
      <View style={memoItem}>
        <View>
          <Text style={memoItemTitle}>買い物リスト</Text>
          <Text style={memoItemDate}>2024/04/24 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
      <View style={memoItem}>
        <View>
          <Text style={memoItemTitle}>買い物リスト</Text>
          <Text style={memoItemDate}>2024/04/24 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
    </View>
  );
};

const { memoItem, memoItemTitle, memoItemDate } = StyleSheet.create({
  memoItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.15)",
  },
  memoItemTitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  memoItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
});
