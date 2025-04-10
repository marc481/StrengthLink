import React from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Calendar } from "react-native-calendars";

// CalendarModal displays a full-screen calendar in a modal.
// When a date is selected, it calls the onConfirm callback.
const CalendarModal = ({ visible, date, onConfirm, onCancel }) => {
  // Format the given date to a string in the format that react-native-calendars expects (YYYY-MM-DD)
  const formatDateForCalendar = (dateObj) => {
    const year = dateObj.getFullYear();
    // Ensure month and day are two digits
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const selectedDate = formatDateForCalendar(date);

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          {/* Calendar component for selecting a date */}
          <Calendar
            // Mark the currently selected date
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: "#007AFF",
              },
            }}
            // When a day is pressed, call onConfirm with a new Date object
            onDayPress={(day) =>
              onConfirm(new Date(day.year, day.month - 1, day.day))
            }
          />

          {/* Cancel button to close the modal without changing the date */}
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
  },
  cancelButton: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CalendarModal;
