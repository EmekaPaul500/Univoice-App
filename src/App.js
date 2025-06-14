import logo from "./logo.svg";
import "./App.css";

import Layout from "./Components/App Layout/Layout";
import SplashScreen1 from "./Components/Splash screens/SplashScreen1/SplashScreen1";
import SplashScreen2 from "./Components/Splash screens/SplashScreen2/SplashScreen2";
import SplashScreen3 from "./Components/Splash screens/SplashScreen3/SplashScreen3";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign Up/SignUp";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<SplashScreen1 />} />
        <Route path="/splashScreen2" element={<SplashScreen2 />} />
        <Route path="/splashScreen3" element={<SplashScreen3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>
    )
  );
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
