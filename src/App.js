import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Footer from "./components/footer";
import Login from "./pages/login";
import Account from "./pages/account";
import { useState } from "react";
import Contact from "./pages/contact";
import Feed from "./pages/feed";
import { useEffect } from "react";
import { fetchContest } from "./utlis";

const App = () => {
  const [user, setUser] = useState();
  const [contests, setContest] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    fetchContest(setContest);
  }, []);

  return (
    <div className="AppStyles">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setter={setUser} user={user} />} />

          <Route path="/about" element={<About user={user} />} />
          <Route
            path="/account"
            element={
              <Account
                setter={setUser}
                user={user}
                setContest={setContest}
                contests={contests}
                setUserEvents={setUserEvents}
                userEvents={userEvents}
              />
            }
          />
          <Route path="/contact" element={<Contact user={user} />} />
          <Route
            path="/feed"
            element={
              <Feed
                user={user}
                setContest={setContest}
                contests={contests}
                setUserEvents={setUserEvents}
                userEvents={userEvents}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
