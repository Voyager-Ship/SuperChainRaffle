import { Avatar, Button, Card } from "@mui/material";
import styles from "../styles/components/profile-card.module.css";
import { ProfileInfoCard } from "./ProfileInfoCard";

type ProfileCardProps = {
  rank: number;
  userHash: string;
};

function ProfileCard({ rank, userHash }: ProfileCardProps) {
  return (
    <Card className={styles["container--all"]}>
      <div className={styles["contianer--header"]}>
        <h2>Profile</h2>
        <div className={styles["container--header--rigth"]}>
          <Button className={styles["button--rank"]}>Rank: {rank}</Button>
          <Button className={styles["button--rank--icon"]}>#</Button>
        </div>
      </div>
      <div className={styles["container--profile"]}>
        <Avatar sx={{ bgcolor: "black" }}>N</Avatar>
        <p>{userHash}</p>
      </div>
      <div className={styles["container--profile--info-cards"]}>
        <ProfileInfoCard primary="ETH earned" secondary={0.12} />
        <ProfileInfoCard primary="SRP earned" secondary={150} />
        <ProfileInfoCard primary="Entries" secondary={12} />
      </div>
    </Card>
  );
}

export { ProfileCard };
