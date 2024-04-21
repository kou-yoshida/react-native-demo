import { View, Text, StyleSheet, type TextStyle } from "react-native";

export const Hello = ({
  children,
  style,
}: {
  children: string;
  style?: TextStyle;
}) => {
  return (
    <View>
      <Text style={[text, style]}>hello component{children}</Text>
    </View>
  );
};

const { text } = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold" as const,
    padding: 16,
  },
});
