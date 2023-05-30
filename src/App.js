import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import UserLayout from "./layout/UserLayout";
import Home from "./pages/home";
import Search from "./pages/search";
import Info from "./pages/info";
import Chart from "./pages/chart";
import { publicRoutes } from "./routers/routes";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.element;
              return (
                <Route key={index} path={route.path} element={<UserLayout> <Page /> </UserLayout>} />
              )
            })
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
