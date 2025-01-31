import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../config/theme";

const Icons = {};

// General Icons
const Add = ({ color = COLORS.buttonText, size = 24 }) => (
  <MaterialIcons name="add" size={size} color={color} />
);
const Delete = ({ color = COLORS.buttonText, size = 24 }) => (
  <MaterialIcons name="delete" size={size} color={color} />
);
const Edit = ({ color = COLORS.buttonText, size = 24 }) => (
  <MaterialIcons name="edit" size={size} color={color} />
);
const Search = ({ color = COLORS.buttonText, size = 24 }) => (
  <MaterialIcons name="search" size={size} color={color} />
);

// Footer Icons
const Home = ({ color = COLORS.footerActiveText, size = 24 }) => (
  <MaterialCommunityIcons name="home" size={size} color={color} />
);
const Workout = ({ color = COLORS.footerActiveText, size = 24 }) => (
  <MaterialCommunityIcons name="dumbbell" size={size} color={color} />
);
const Social = ({ color = COLORS.footerActiveText, size = 24 }) => (
  <MaterialCommunityIcons name="account-group" size={size} color={color} />
);
const Progress = ({ color = COLORS.footerActiveText, size = 24 }) => (
  <MaterialCommunityIcons name="chart-line" size={size} color={color} />
);
const Profile = ({ color = COLORS.footerActiveText, size = 24 }) => (
  <MaterialCommunityIcons name="account" size={size} color={color} />
);

// User Icon
const User = ({ color = COLORS.primary, size = 24 }) => (
  <MaterialCommunityIcons name="account-circle" size={size} color={color} />
);

// Compose Icons
Icons.Add = Add;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Search = Search;
Icons.Home = Home;
Icons.Workout = Workout;
Icons.Social = Social;
Icons.Progress = Progress;
Icons.Profile = Profile;
Icons.User = User; // Added User icon

export default Icons;
