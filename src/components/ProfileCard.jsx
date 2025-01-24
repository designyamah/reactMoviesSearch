import styles from "./ProfileCard.module.css";

function ProfileCard({ profile }) {
  let profileBadge = 8;

  return (
    <article className={styles.wrapper}>
      <header>
        <h2>dsdsd</h2>
        <p className="joined">Joined 2323</p>
      </header>
      {profileBadge >= 1 && (
        <ul className={profileBadge >= 3 ? "golden badge-list" : "badge-list"}>
          <li>Badge 1</li>
          <li>Badge 2</li>
          <li>Badge 3</li>
        </ul>
      )}
    </article>
  );
}

export default ProfileCard;
