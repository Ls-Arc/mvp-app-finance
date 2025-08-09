import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  onPress: () => void;
  customStyle?: StyleProp<ViewStyle>;
};

export default function CircleButton({ onPress, customStyle }: Props) {
  return (
    <View style={[styles.circleButtonContainer, customStyle]}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#23282B",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#3c3c3c",
  },
});
