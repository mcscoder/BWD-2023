import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import UserLayout from "./layout/UserLayout";
import Home from "./pages/home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
