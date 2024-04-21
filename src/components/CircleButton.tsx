import { View, Text, StyleSheet, ViewStyle } from "react-native";

export default ({
  children,
  style,
}: {
  children: string;
  style?: ViewStyle;
}) => {
  return (
    <View style={[circleButton, style]}>
      <Text style={circleButtonLabel}>{children}</Text>
    </View>
  );
};

const { circleButton, circleButtonLabel } = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 42,
    right: 42,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  circleButtonLabel: {
    color: "#ffffff",
    lineHeight: 44,
    fontSize: 40,
    textAlign: "center",
  },
});
