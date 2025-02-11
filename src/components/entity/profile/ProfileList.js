import React from "react";
import { View } from "react-native";
import ProfileItem from "./ProfileItem";

const ProfileList = ({ profileData }) => {
  return (
    // 🟢 Views
    <View>
      <ProfileItem label="Age" value={profileData.Age} />
      <ProfileItem label="Height" value={profileData.Height} />
      <ProfileItem label="Weight" value={profileData.Weight} />
    </View>
  );
};

export default ProfileList;
