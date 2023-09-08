import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "../components/Profiles/Profiles";

const Home = () => {
  return (
    <>
      <Header />
      <h2 style={{ margin: "2% auto" }}>User Profiles</h2>
      <Profile />
    </>
  );
};
export default Home;
