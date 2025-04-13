import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { Button, ButtonTray } from "../../UI/Button";
import Form from "../../UI/Form";
import { COLORS, SPACING, FONTS } from "../../../config/theme";

const GoalModal = ({
  visible,
  onClose,
  onSave,
  exerciseName,
  targetWeight,
  setTargetWeight,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={FONTS.bold}>Set Goal for {exerciseName}</Text>
          <Form.InputText
            label="Target Weight (kg)"
            value={targetWeight}
            onChange={setTargetWeight}
          />
          <ButtonTray>
            <Button label="Save Goal" onPress={onSave} />
            <Button label="Cancel" onPress={onClose} variant="delete" />
          </ButtonTray>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: COLORS.inputBackground,
    padding: SPACING.large,
    borderRadius: 10,
  },
});

export default GoalModal;
