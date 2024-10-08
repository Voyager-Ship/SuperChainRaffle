"use client";
import React from "react";
import styles from "./styles.module.css";
import BackIcon from "@/public/images/back-icon.svg";
import { Stack, SvgIcon } from "@mui/material";
import Link from "next/link";
import YourRanking from "@/components/LeaderBoard/YourRanking";
import { getMyLeaderBoardInfo } from "@/functions/fetchFunctions";
import { useQuery } from "react-query";
import LeaderBoard from "@/components/LeaderBoard";

function LeaderBoardView() {
  const { data, status } = useQuery("account", getMyLeaderBoardInfo);
  return (
    <Stack
      direction={"column"}
      alignContent={"start"}
      className={styles["container--all"]}
      spacing={6}
    >
      <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <Link href="/">
          <SvgIcon
            component={BackIcon}
            inheritViewBox
            style={{
              width: "20px",
              height: "16px",
              cursor: "pointer",
            }}
          />
        </Link>
        <p className={styles["back--text"]}>Back to dashboard </p>
      </Stack>
      <Stack
        direction={"column"}
        spacing={2}
        alignItems={"start"}
        justifyContent={"center"}
      >
        <h1 className={styles["title"]}>Leaderboard</h1>
        <p className={styles["text--join"]}>
          Join the raffles and watch your name climb the leaderboard
        </p>
      </Stack>
      <Stack spacing={1}>
        <p className={styles["title--your-ranking"]}>Your Ranking</p>
        <YourRanking account={data} status={status} />
      </Stack>
      <LeaderBoard myInfo={data} />
    </Stack>
  );
}

export default LeaderBoardView;
