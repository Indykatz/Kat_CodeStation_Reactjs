import { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Quote from "../components/quote";
import UserEventMap from "../components/userEventMap";
import { AppStyles, ContentStyled, Header1Styled } from "../styles/app.styles";
import { deleteFetch, updateFetch } from "../utlis";

const Account = ({
  setter,
  user,
  userEvents,
  setUserEvents,
  contests,
  setContest,
}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    const updateObj = { username, email, password };
    for (const key in updateObj) {
      if (!updateObj[key]) {
        delete updateObj[key];
      }
    }
    await updateFetch({ username: user }, updateObj, setter);
  };

  const handleNotInterested = (index) => {
    let storeUserContest = [...userEvents];
    let storeContests = [...contests];
    let removeFromUser = storeUserContest[index];
    storeContests.push(removeFromUser);
    // storeContests.unshift(removeFromUser);
    setContest(storeContests);
    userEvents.splice(index, 1);
    setUserEvents(userEvents);
  };
  return (
    <AppStyles>
      {!user && <Navigate to="/" />}
      <Quote />
      <Navbar />
      <Header />
      <ContentStyled>
        <Header1Styled>{user}'s Account</Header1Styled>
        <div>
          <form onSubmit={submitHandler}>
            <h2>Update Profile</h2>
            <input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
            <button type="submit">Update</button>
          </form>
          <button onClick={() => deleteFetch(setter)}>Delete Account</button>
        </div>
        {userEvents.map((userEvent, index) => {
          return (
            <UserEventMap
              key={index}
              name={userEvent.name}
              url={userEvent.url}
              start_time={userEvent.start_time}
              end_time={userEvent.end_time}
              site={userEvent.site}
              handleNotInterested={() => handleNotInterested(index)}
            />
          );
        })}
      </ContentStyled>
    </AppStyles>
  );
};

export default Account;
