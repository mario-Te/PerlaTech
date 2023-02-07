import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    );
  }
  export default App;