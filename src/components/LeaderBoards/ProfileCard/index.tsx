import React from "react";
import { Stack, SvgIcon } from "@mui/material";
import { LeaderBoardAccountType } from "@/types/commons";
import EthIcon from "@/public/images/eth-icon.svg";
import SrIcon from "@/public/images/sr-icon.svg";
import TicketsIcon from "@/public/images/tickets-icon-blue-filled.svg";
import styles from "./styles.module.css";
import ProfileImage from "@/public/images/profile-icon.svg";

type Props = {
  account: LeaderBoardAccountType;
};

function LeaderBoardProfileCard({ account }: Props) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      className={styles["container--all"]}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-center"}
        spacing={2}
      >
        <div className={styles["container--rank"]}>
          <p>{account.position}</p>
        </div>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-center"}
          width={"40%"}
          spacing={1}
        >
          <SvgIcon
            component={ProfileImage}
            inheritViewBox
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "100%",
            }}
          />
          <p>{account.address}</p>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"end"}
        width={"30%"}
        spacing={3}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"30%"}
          spacing={1}
        >
          <p>{account.tickets}</p>
          <SvgIcon
            component={TicketsIcon}
            inheritViewBox
            style={{
              width: "20px",
              height: "16px",
            }}
          />
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-center"}
          width={"30%"}
          spacing={1}
        >
          <p>{account.eth}</p>
          <SvgIcon
            component={EthIcon}
            inheritViewBox
            style={{
              width: "20px",
              height: "16px",
            }}
          />
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-center"}
          width={"30%"}
          spacing={1}
        >
          <p>{account.sr}</p>
          <SvgIcon
            component={SrIcon}
            inheritViewBox
            style={{
              width: "20px",
              height: "16px",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default LeaderBoardProfileCard;
