import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/profile" index element={<ProfilePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
