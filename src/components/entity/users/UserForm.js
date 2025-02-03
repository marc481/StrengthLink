import React, { useState } from "react";
import Form from "../../UI/Form";
import Icons from "../../UI/icons.js";

const defaultUser = {
  UserID: null,
  UserFirstName: "",
  UserLastName: "",
  UserName: "",
  UserEmail: "",
  Password: "",
};

const UserForm = ({ originalUser, onSubmit, onCancel, type = "signup" }) => {
  const [user, setUser] = useState(originalUser || { ...defaultUser });

  const handleChange = (field, value) => setUser({ ...user, [field]: value });
  const handleSubmit = () => onSubmit(user);

  const submitLabel = type === "signup" ? "Sign Up" : "Add Friend";
  const submitIcon = type === "signup" ? <Icons.Add /> : <Icons.User />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
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
            label="Username"
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
            secureTextEntry
          />
        </>
      )}
      {type === "addFriend" && (
        <Form.InputText
          label="Username"
          value={user.UserName}
          onChange={(value) => handleChange("UserName", value)}
        />
      )}
    </Form>
  );
};

export default UserForm;
