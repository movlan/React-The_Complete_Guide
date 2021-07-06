import React, { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "123 Main St, Some City, 12234",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup Yay",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "348 Second St, Other City, 72300",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "Another Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "199 Market St, Narnia, 12938",
    description: "Open the closet!",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send http data and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
