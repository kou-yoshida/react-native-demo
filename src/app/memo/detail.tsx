import { View, Text, StyleSheet, ScrollView } from "react-native";
import CircleButton from "../../components/CircleButton";
import Header from "../../components/Header";

export default () => {
  return (
    <View style={container}>
      <Header />

      <View style={memoHeader}>
        <Text style={memoTitle}>買い物リスト</Text>
        <Text style={memoDate}>2024/04/29 10:00</Text>
      </View>

      <View>
        <ScrollView style={memoBody}>
          <Text style={memoBodyText}>
            詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト
          </Text>
        </ScrollView>
      </View>

      <CircleButton style={circleButton}>＋</CircleButton>
    </View>
  );
};

const {
  container,
  memoHeader,
  memoTitle,
  memoDate,
  memoBody,
  memoBodyText,
  circleButton,
} = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 90,
    justifyContent: "flex-end",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: { color: "#ffffff", fontSize: 12, lineHeight: 16 },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    color: "#00000",
    fontSize: 16,
    lineHeight: 24,
  },
  circleButton: {
    top: 160,
    bottom: "auto",
  },
});
