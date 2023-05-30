import "./assets/sass/main.scss";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// scss file import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// auth for protected rotue
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// * @ 404 page
import PageNotFound from "./ui/pages/PageNotFound";

import { sidebarRoutes } from "./routes/routes";
// import { help, setting } from "./routes/routes";

const App = () => {
  // const { user } = useAuth();
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<>Hello</>} />

          {/* Dashboard routes */}
          <Route path="/dashboard">
            {sidebarRoutes.map((el: any, index: number) => {
              return (
                <>
                  <Route
                    path={el.path}
                    element={el.element}
                    key={index.toString()}
                  ></Route>
                </>
              );
            })}
          </Route>

          {/* <Route path={setting.path} element={setting.element} /> */}
          {/* <Route path={help.path} element={help.element} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
