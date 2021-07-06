import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const meetup = {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
    address: "123 Main St, Some City, 12234",
    description: "This is a first meetup!",
  };
  return <MeetupDetail {...meetup} />;
};

export default MeetupDetails;
