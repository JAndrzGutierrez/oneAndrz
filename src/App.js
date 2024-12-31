import "./styles.css";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import UserProfileSettings from "./components/storysection/StorySection";

 const uri = "mongodb+srv://oneDotadmin:<db_password>@onedot-dev.k2vqj.mongodb.net/?retryWrites=true&w=majority&appName=oneDot-dev"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Home/>
      {/* <UserProfileSettings/> */}
    </div>
  );
}
