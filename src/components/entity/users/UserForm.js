import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Icons from "../../UI/icons";
import Form from "../../UI/Form";

const defaultUser = {
  UserID: null,
  UserFirstName: null,
  UserLastName: null,
  UserName: null,
  UserEmail: null,
  Password: null,
};

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
  // Initialisation
  const [user, setUser] = useState(originalUser || { ...defaultUser });
  // Handlers
  const handleChange = (field, value) => setUser({ ...user, [field]: value });
  const handleSubmit = () => onSubmit(user);

  const submitLabel = originalUser ? "Modify" : "Add";
  const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      {/* If used for signing up, show all fields */}
      {type === "signup" && (
        <>
          <Form.InputText
            label="First Name"
            value={user.UserFirstName}
            onChange={(value) => handleChange("UserFirstName", value)}
          />
          <Form.InputText
            label="Last Name"
            value={user.UserLastName}
            onChange={(value) => handleChange("UserLastName", value)}
          />
          <Form.InputText
            label="UserName"
            value={user.UserName}
            onChange={(value) => handleChange("UserName", value)}
          />

          <Form.InputText
            label="Email"
            value={user.UserEmail}
            onChange={(value) => handleChange("UserEmail", value)}
          />
          <Form.InputText
            label="Password"
            value={user.Password}
            onChange={(value) => handleChange("Password", value)}
          />
        </>
      )}
      {/* If used for adding a friend, show only username */};
      {type === "addFriend" && (
        <Form.InputText
          label="UserName"
          value={user.UserName}
          onChange={(value) => handleChange("UserName", value)}
        />
      )}
      ;
    </Form>
  );
};

export default UserForm;
