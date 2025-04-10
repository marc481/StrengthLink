// DatePickerModal.js
import React from "react";
import DatePicker from "react-native-date-picker";

const DatePickerModal = ({ visible, date, onConfirm, onCancel }) => {
  return (
    <DatePicker
      modal
      open={visible}
      date={date}
      mode="date"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default DatePickerModal;
