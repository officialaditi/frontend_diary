import Login from "./components/Login";
import Profile from "./components/Profile";
import ThemeButton from "./components/ThemeButton";
import ThemeContextProvider from "./context/ThemeContextProvider";
import UserContextProvider from "./context/userContextProvider";

const App = () => {
  return (
    <div>
      <UserContextProvider>
      <h1>Context API</h1>
      <Login/>
      <Profile/>
      </UserContextProvider>
    <ThemeContextProvider>
    <ThemeButton/>
    </ThemeContextProvider>
    </div>
  );
};

export default App;