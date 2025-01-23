import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button, ButtonTray } from "./Button";
import Icons from "./icons";
import { COLORS, FONTS } from "../../config/theme";
import { Picker } from "@react-native-picker/picker";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <ScrollView contentContainerStyle={styles.formItems}>
        {children}
      </ScrollView>

      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onPress={onSubmit} />
        <Button label="Cancel" icon={<Icons.Delete />} onPress={onCancel} />
      </ButtonTray>
    </KeyboardAvoidingView>
  );
};

const InputText = ({ label, value, onChange, keyboardType = "default" }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.itemTextInput}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>

      <Picker
        mode="dropdown"
        selectedValue={value}
        onValueChange={onChange}
        style={styles.itemPickerStyle}
      >
        <Picker.Item
          value={null}
          label={prompt}
          style={styles.itemPickerPromptStyle}
        />
        {options.map((option, index) => (
          <Picker.Item key={index} value={option.value} label={option.label} />
        ))}
      </Picker>
    </View>
  );
};

// Compose Components
Form.InputText = InputText;
Form.InputSelect = InputSelect;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  formItems: {
    gap: 15,
  },
  itemLabel: {
    color: COLORS.primaryText,
    fontSize: FONTS.labelSize,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: FONTS.inputSize,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  itemPickerStyle: {
    height: 50,
    backgroundColor: COLORS.inputBackground,
  },
  itemPickerPromptStyle: {
    color: COLORS.secondaryText,
  },
});

export default Form;
