import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage, AboutPage, LoginPage } from "./pages";
import './App.css';
import { Layout } from "./components/Layout";



function App() {
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const userStatus = localStorage.getItem("user");

    if (userStatus && JSON.parse(userStatus)) {
      return setUser(true)
    } else {
      return setUser(false)
    };

  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
    console.log(user);
  }, [user])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          {!user && (
            <>
              <Route path="login" element={<LoginPage authenticate={() => setUser(true)} />} />
              <Route path="about" element={<Navigate to="/login" />} />
              <Route path="about-us" element={<Navigate to="/login" />} />
              <Route index element={<Navigate to="/login" />} />
            </>
          )}

          {user && (
            <>
              <Route path="login" element={<Navigate to="/about" />} />
              <Route index element={<HomePage logout={() => setUser(false)} />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="about-us" element={<Navigate to="/about" />} />

            </>
          )}

          <Route path="*" element={<h1 className="existing">Page doesn't exist</h1>} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
