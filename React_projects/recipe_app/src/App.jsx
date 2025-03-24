import { Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import HomePage from "./pages/HomePage";
import FavPage from "./pages/FavPage";

const App = () => {
  return (
    <div className="flex">
      <Sidebar/>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/favourite" element={<FavPage/>} />
  </Routes>
  
    </div>
  );
};
export default App;
