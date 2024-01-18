import "./App.css";
import { ProfileGet } from "./ProfileGet";
import { ProfileShow } from "./ProfileShow";
import { ProfileInfo } from "./ProfileInfo";

function App() {
  return (
    <ProfileGet>
      <ProfileShow />
      <ProfileInfo />
    </ProfileGet>
  );
}

export default App;
