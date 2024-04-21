import { View, Text, StyleSheet } from "react-native";

export default () => {
  return (
    <View style={header}>
      <View style={headerInner}>
        <Text style={headerTitle}>Memo App</Text>
        <Text style={headerRight}>ログアウト</Text>
      </View>
    </View>
  );
};

const { header, headerInner, headerRight, headerTitle } = StyleSheet.create({
  header: {
    backgroundColor: "#467FD3",
    height: 104,
    justifyContent: "flex-end",
  },
  headerInner: {
    alignItems: "center",
  },
  headerRight: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "rgba(255,255,255,0.7)",
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
