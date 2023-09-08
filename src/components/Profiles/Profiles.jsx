import { useContext, useEffect, useState } from "react";
import styles from "./Profiles.module.css";
import { deleteUser, getUserData } from "../../services/getUserData";
import ProfileCard from "../ProfileCard/ProfileCard";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Button } from "react-bootstrap";

const Profile = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserData(page)
      .then((output) => {
        setIsError(false);
        setUserDetails(output.data);
        setLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setLoading(false);
      });
  }, [page]);

  const { isDark } = useContext(ThemeContext);

  const deleteHandler = (user_index) => {
    console.log("delete", user_index);
    const data_to_delete = userDetails[user_index].id;
    deleteUser(data_to_delete).then((isDeleted) => {
      if (isDeleted) {
        const user_data = [...userDetails];
        user_data.splice(user_index, 1);
        setUserDetails(user_data);
      }
    });
  };

  const profileCard = userDetails.map((ele, index) => (
    <ProfileCard
      key={index}
      first_name={ele.first_name}
      email={ele.email}
      profile_picture={ele.avatar}
      deleteHandler={deleteHandler}
      user_index={index}
    />
  ));
  return (
    <>
      {!loading && (
        <>
          {isError && <p>No Data Recieved</p>}
          {!isError && (
            <div className={styles.cardContainer}>{profileCard}</div>
          )}
        </>
      )}
      <Button
        variant={isDark ? "dark" : "success"}
        onClick={() => {
          setPage(page === 1 ? 2 : 1);
        }}
      >
        Show Page {page === 1 ? 2 : 1}
      </Button>
      {loading && <div>Loader.......</div>}
    </>
  );
};
export default Profile;
