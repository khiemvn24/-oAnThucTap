/** @format */
import { Route, Routes } from "react-router-dom";
import AppUser from "./AppUser";
import Admin from "./Components/Administrator/Admin";
import LoginAdmin from "./Components/Administrator/LoginAdmin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<LoginAdmin/>} />
        <Route path="/Admin/*" element={<Admin/>} />
      </Routes>
    </div>
  );
}
export default App;