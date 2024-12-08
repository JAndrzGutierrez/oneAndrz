import "./styles.css";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import UserProfileSettings from "./components/storysection/StorySection";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Home/>
      <UserProfileSettings/>
    </div>
  );
}
