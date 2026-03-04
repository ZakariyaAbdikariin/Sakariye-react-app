import "./App.css";
import Clicker from "./components/Clicker";
import { Tiriye } from "./components/Counter";
import Dashboard from "./components/Dashboard";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Inputer from "./components/Inputer";
import Notification from "./components/Notification";
import ThemeToggle from "./components/ThemeSwitcher";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <>
      <Dashboard isLoggedIn={true} />
      <Notification hasMessage={false} />
      <WelcomeMessage isLoggedIn={false} />
      <ThemeToggle />
      <Header />
      <Inputer />
      <Greeting name="Sakariye" surname="Abdikariin" />
      <Clicker />
      <Greeting name="Sakariye" surname="Abdikariin" />
      <Tiriye />
    </>
  );
}

export default App;
