import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface indexProps {
  name: string;
  isChecked?: boolean;
  onCheck: () => void;
  onRemove: () => void;
}

export const Participant: React.FC<indexProps> = ({
  name,
  onRemove,
  onCheck,
  isChecked,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onCheck}
        style={isChecked ? styles.checkedbox : styles.checkbox}
      >
        {isChecked && <Image source={require("../../assets/check.png")} />}
      </TouchableOpacity>

      <Text
        style={[
          styles.name,
          { textDecorationLine: isChecked ? "line-through" : "none" },
          { color: isChecked ? "#808080" : "#F2F2F2" },
        ]}
      >
        {name}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
};
