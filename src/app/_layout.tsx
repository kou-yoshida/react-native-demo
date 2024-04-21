import { Slot } from "expo-router";
import { Text, View } from "react-native";
export default () => {
  return (
    <View>
      <Text>Layout</Text>
      <Slot />
    </View>
  );
};
