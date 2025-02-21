import { useState } from "react";
import { View, Modal, StyleSheet } from "react-native";
import Form from "../../UI/Form";
import { Button, ButtonTray } from "../../UI/Button";

const ExerciseInputModal = ({ visible, onClose, onSave }) => {
  const [exercise, setExercise] = useState({
    ExerciseID: Math.floor(100000 + Math.random() * 900000),
    ExerciseName: "",
    Sets: "",
    Reps: "",
    Weight: "",
  });

  const handleChange = (field, value) => {
    setExercise({ ...exercise, [field]: value });
  };

  const handleSave = () => {
    if (!exercise.ExerciseName.trim()) {
      alert("Exercise name cannot be empty.");
      return;
    }
    onSave(exercise);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Form.InputText
            label="Exercise Name"
            value={exercise.ExerciseName}
            onChange={(value) => handleChange("ExerciseName", value)}
          />
          <Form.InputText
            label="Sets"
            value={exercise.Sets.toString()}
            onChange={(value) => handleChange("Sets", parseInt(value) || 0)}
          />
          <Form.InputText
            label="Reps"
            value={exercise.Reps.toString()}
            onChange={(value) => handleChange("Reps", parseInt(value) || 0)}
          />
          <Form.InputText
            label="Weight (kg)"
            value={exercise.Weight.toString()}
            onChange={(value) => handleChange("Weight", parseFloat(value) || 0)}
          />

          <ButtonTray>
            <Button label="Save Exercise" onPress={handleSave} />
            <Button
              label="Cancel"
              onPress={onClose}
              styleButton={{ backgroundColor: "mistyrose" }}
              styleLabel={{ color: "red" }}
            />
          </ButtonTray>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default ExerciseInputModal;
