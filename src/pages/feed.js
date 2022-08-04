import { Navigate } from "react-router-dom";
import EventMap from "../components/eventsMap";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Quote from "../components/quote";
import { AppStyles, ContentStyled, Header1Styled } from "../styles/app.styles";

const Feed = ({ user, userEvents, setUserEvents, contests, setContest }) => {
  // const [contests, setContest] = useState([]);

  // useEffect(() => {
  //   fetchContest(setContest);
  // });

  const handleInterested = (index) => {
    let storeContests = [...contests];
    let storeUserContest = [...userEvents];
    let toUSer = storeContests[index];
    storeUserContest.push(toUSer);
    setUserEvents(storeUserContest);
    console.log(userEvents);
    storeContests.splice(index, 1);
    setContest(storeContests);
  };

  return (
    <AppStyles>
      {!user && <Navigate to="/" />}
      <Quote />
      <Navbar />
      <Header />
      <ContentStyled>
        <Header1Styled>{user}'s Feed</Header1Styled>
        <div>
          {contests.map((contest, index) => {
            return (
              <EventMap
                key={index}
                name={contest.name}
                url={contest.url}
                start_time={contest.start_time}
                end_time={contest.end_time}
                site={contest.site}
                handleInterested={() => handleInterested(index)}
              />
            );
          })}
        </div>
      </ContentStyled>
    </AppStyles>
  );
};

export default Feed;
