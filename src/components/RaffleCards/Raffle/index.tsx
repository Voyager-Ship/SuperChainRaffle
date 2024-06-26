"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  SvgIcon,
} from "@mui/material";
import ethIcon from "@/public/images/eth-icon.svg";
import srIcon from "@/public/images/sr-icon.svg";
import myEntriesBlueIcon from "@/public/images/tickets-icon-blue.svg";
import myEntriesOpaqueIcon from "@/public/images/tickets-icon-opaque.svg";
import prizePotIcon from "@/public/images/trophy-icon.svg";
import totalEntriesIcon from "@/public/images/tickets-icon-gray-dotted.svg";
import endsInIcon from "@/public/images/clock-icon.svg";
import PurchaseTickets from "../PurchaseTickets";
import HistoryIcon from "@/public/images/history-icon.svg";
import { AnimatePresence, motion } from "framer-motion";
import BackIcon from "@/public/images/back-icon.svg";
import { type ElementType, useMemo } from "react";
import RaffleInfo from "../RaffleInfo";
import MyTickets from "../MyTickets";
import styles from "./styles.module.css";

enum ColorParser {
  "#FF0420" = "red",
  "#354FFC" = "blue",
  "#DEFE2A" = "yellow",
}

type RaffleProps = {
  id: string;
  offset: number;
  raffleCardText: string;
  raffleCardChipsText: { value: number; network: string };
  chipColor: string;
  entriesColor?: string;
  endsIn: string;
  prizePotEth: number;
  prizePotSr: number;
  totalEntries: number;
  currentEntries: number;
  entries: number;
  networkIcon: ElementType;
  bgImg: ElementType;
  expandedCard: string | null;
  round: number;
  onClick: (id: string | null) => void;
};

function Raffle({
  id,
  offset,
  raffleCardText,
  raffleCardChipsText,
  chipColor,
  entriesColor,
  endsIn,
  prizePotEth,
  prizePotSr,
  totalEntries,
  currentEntries,
  entries,
  networkIcon,
  bgImg,
  expandedCard,
  round,
  onClick,
}: RaffleProps) {
  const isMainCard = useMemo(() => expandedCard === id, [expandedCard, id]);
  const noMainCard = useMemo(() => !expandedCard, [expandedCard]);

  return (
    <AnimatePresence>
      <motion.div
        onClick={() => (isMainCard ? {} : onClick(id))}
        initial={{ height: "238px", opacity: 1 }}
        animate={
          isMainCard
            ? { height: offset, opacity: 1 }
            : expandedCard
              ? {
                  height: "0px",
                  opacity: 0,

                  display: "none",
                }
              : { height: "238px", opacity: 1 }
        }
        exit={{ height: "0px", opacity: 0 }}
        style={{
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <Card className={styles["container--all"]}>
          <div className={styles["container--principal"]}>
            <div className={styles["container--header"]}>
              {isMainCard && (
                <div className={styles["container--back"]}>
                  <SvgIcon
                    onClick={() => onClick(null)}
                    component={BackIcon}
                    inheritViewBox
                    style={{
                      zIndex: 120,
                      width: "20px",
                      height: "16px",
                      cursor: "pointer",
                    }}
                  />
                  <span>All Raffles</span>
                </div>
              )}
              <motion.div
                initial={{ marginTop: 0, width: "60%" }}
                animate={{ marginTop: isMainCard ? 64 : 0 }}
              >
                <Typography fontSize={24} fontWeight={600}>
                  {raffleCardText}
                </Typography>
                {!noMainCard && (
                  <p>
                    Take part in this raffle for a chance to receive rewards
                    lorem ipsum established fact that a reader.
                  </p>
                )}
              </motion.div>
              <div className={styles["container--header--chips"]}>
                {noMainCard && (
                  <Chip
                    className={`${styles["chip"]} ${styles[`chip--white`]}`}
                    label={`${raffleCardChipsText.value} ETH`}
                    onDelete={() => {}}
                    deleteIcon={
                      <SvgIcon
                        component={ethIcon}
                        inheritViewBox
                        style={{
                          width: "16px",
                          height: "12px",
                          cursor: "default",
                        }}
                      />
                    }
                  />
                )}
                <Chip
                  className={`${styles["chip"]} ${
                    styles[
                      `chip--${ColorParser[chipColor as keyof typeof ColorParser]}`
                    ]
                  }`}
                  label={raffleCardChipsText.network}
                  onDelete={() => {}}
                  deleteIcon={
                    <SvgIcon
                      component={networkIcon}
                      inheritViewBox
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "default",
                        boxShadow: "0px 4px 4px 0px #00000024",
                      }}
                    />
                  }
                />
              </div>
            </div>
            <CardContent className={styles["container--body"]}>
              <AnimatePresence>
                {isMainCard && (
                  <motion.div
                    key={`text-${id}`}
                    initial={{ opacity: 0, maxWidth: "60%" }}
                    animate={{
                      opacity: isMainCard ? 1 : 0,
                    }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={styles["container--raffle--text--buttons"]}>
                      <Chip
                        className={`${styles["chip"]} ${styles[`chip--black`]}`}
                        label={`Round ${round}`}
                      />
                      <div className={styles["container--raffle-history"]}>
                        <SvgIcon
                          component={HistoryIcon}
                          inheritViewBox
                          style={{
                            width: "20px",
                            height: "20px",
                            cursor: "default",
                          }}
                        />
                        <h4>Raffle history</h4>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                key={`container-info-${id}`}
                initial={{ display: "grid", gap: "12px" }}
                animate={{
                  gridTemplateRows: isMainCard ? "1fr" : "1fr 1fr",
                  gridTemplateColumns: isMainCard ? "1fr 1fr 1fr" : "1fr 1fr",
                  width: isMainCard ? "80%" : "60%",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.2,
                }}
                exit={{ opacity: 0 }}
              >
                <RaffleInfo
                  icon={endsInIcon}
                  primary="Ends in"
                  secondary1={endsIn}
                  noMainCard={noMainCard}
                />
                <RaffleInfo
                  icon={totalEntriesIcon}
                  primary="Total entries"
                  secondary1={totalEntries + "/" + currentEntries}
                  noMainCard={noMainCard}
                />
                <RaffleInfo
                  icon={prizePotIcon}
                  primary="Prize pot"
                  secondary1={prizePotEth}
                  secondary2={prizePotSr}
                  iconS1={ethIcon}
                  iconS2={srIcon}
                  noMainCard={noMainCard}
                />
                {!isMainCard && (
                  <RaffleInfo
                    icon={
                      entriesColor === "#00C2FF"
                        ? myEntriesBlueIcon
                        : myEntriesOpaqueIcon
                    }
                    primary="My entries"
                    secondary1={entries}
                    color={entriesColor}
                    noMainCard={noMainCard}
                  />
                )}
              </motion.div>
            </CardContent>
            <motion.div
              initial={{
                position: "absolute",
                width: "100%",
                height: "120%",
                right: "-32%",
                top: 0,
              }}
              animate={{ height: isMainCard ? "140%" : "120%" }}
            >
              <CardMedia
                className={styles["card--media"]}
                component={bgImg}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </motion.div>
            <div className={styles["container--detail"]}>
              <PurchaseTickets tickets={8} />
              <MyTickets tickets={0} />
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
export default Raffle;
