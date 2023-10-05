import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" index element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
