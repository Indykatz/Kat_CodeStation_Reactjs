const EventMap = ({
  name,
  url,
  start_time,
  end_time,
  site,
  handleInterested,
}) => {
  return (
    <div>
      <a href={url} rel="noreferrer noopener" target="_blank">
        <h3>{name}</h3>
      </a>
        <p>Start Time: {start_time}</p>
        <p>End Time: {end_time}</p>
        <p>Location: {site}</p>
      <button onClick={handleInterested}>Interested</button>
    </div>
  );
};
// };

export default EventMap;
