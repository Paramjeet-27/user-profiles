import { Button } from "react-bootstrap";
import styles from "./ProfileCard.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ProfileCard = ({
  first_name,
  email,
  profile_picture,
  deleteHandler,
  user_index,
}) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <div className={isDark ? styles.darkcard : styles.card}>
        <h4>{first_name}</h4>
        <p>{email}</p>
        <img src={profile_picture} alt="profile_picture" />
        <div>
          <Button
            variant={isDark ? "dark" : "success"}
            className={styles.deletebtn}
            onClick={() => deleteHandler(user_index)}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};
export default ProfileCard;
