import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../config/theme";

const Icons = {
  Add: ({ color = COLORS.buttonText, size = 24 }) => (
    <MaterialIcons name="add" size={size} color={color} />
  ),
  Delete: ({ color = COLORS.buttonText, size = 24 }) => (
    <MaterialIcons name="delete" size={size} color={color} />
  ),
  Edit: ({ color = COLORS.buttonText, size = 24 }) => (
    <MaterialIcons name="edit" size={size} color={color} />
  ),
  Search: ({ color = COLORS.buttonText, size = 24 }) => (
    <MaterialIcons name="search" size={size} color={color} />
  ),
  Home: ({ color = COLORS.footerActiveText, size = 24 }) => (
    <MaterialCommunityIcons name="home" size={size} color={color} />
  ),
  Workout: ({ color = COLORS.footerActiveText, size = 24 }) => (
    <MaterialCommunityIcons name="dumbbell" size={size} color={color} />
  ),
  Social: ({ color = COLORS.footerActiveText, size = 24 }) => (
    <MaterialCommunityIcons name="account-group" size={size} color={color} />
  ),
  Progress: ({ color = COLORS.footerActiveText, size = 24 }) => (
    <MaterialCommunityIcons name="chart-line" size={size} color={color} />
  ),
  Profile: ({ color = COLORS.footerActiveText, size = 24 }) => (
    <MaterialCommunityIcons name="account" size={size} color={color} />
  ),
  User: ({ color = COLORS.primary, size = 24 }) => (
    <MaterialCommunityIcons name="account-circle" size={size} color={color} />
  ),
};

export default Icons;
