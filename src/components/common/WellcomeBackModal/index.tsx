import { Box, Button, Modal, Stack, SvgIcon, Typography } from "@mui/material";
import WellcomeBackImg from "@/public/images/welcome-back-img.svg";
import React from "react";
import WellcomeBackInfoCard from "./InfoCard";
import ETHIcon from "@/public/images/eth-icon.svg";
import SRIcon from "@/public/images/sr-icon.svg";
import MyTicketsIcon from "@/public/images/tickets-icon-opaque.svg";
import CloseIcon from "@/public/images/close-icon.svg";
import styles from "./styles.module.css";

function WellcomeBackModal({ open }: { open: boolean }) {
  const handleClose = () => {
    console.log("close");
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={styles["container--modal"]}>
        <SvgIcon
          component={CloseIcon}
          inheritViewBox
          style={{
            width: "12px",
            height: "12px",
            position: "absolute",
            top: "12px",
            right: "12px",
            cursor: "pointer",
          }}
        />
        <Stack
          direction={"column"}
          spacing={1}
          alignItems={"center"}
          justifyContent={"center"}
          className={styles["container--content"]}
          padding={4}
        >
          <Typography id="modal-modal-title" variant="h2" component="h2">
            Welcome back!
          </Typography>
          <SvgIcon
            component={WellcomeBackImg}
            inheritViewBox
            style={{ width: "120px", height: "120px" }}
          />
          <Stack direction={"row"} spacing={0.5}>
            <Typography className={styles["text--while"]}>
              While you were away,
            </Typography>
            <Typography className={styles["text--while--strong"]}>
              you've won:
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={4}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            paddingX={6}
            paddingY={2}
          >
            <WellcomeBackInfoCard text="ETH" value={0.01} icon={ETHIcon} />
            <WellcomeBackInfoCard text="SR Points" value={10} icon={SRIcon} />
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={1}
          >
            <Typography className={styles["text--my-tickets"]}>
              My Winning Tickets
            </Typography>
            <SvgIcon
              component={MyTicketsIcon}
              inheritViewBox
              style={{ width: "20px", height: "20px" }}
            />
          </Stack>
        </Stack>
        <Button className={styles["button--claim-rewards"]} variant="text">
          Claim Rewards
        </Button>
      </Box>
    </Modal>
  );
}

export default WellcomeBackModal;
