"use client";

import Optimisim from "@/public/images/optimisim-icon.svg";
import Mode from "@/public/images/mode-icon.svg";
import Base from "@/public/images/base-icon.svg";
import React, { useState } from "react";
import OptimisimBgImg from "@/public/images/optimisim-bg-img.svg";
import BaseBgImg from "@/public/images/base-bg-img.svg";
import ModeBgImg from "@/public/images/mode-bg-img.svg";
import styles from "./styles.module.css";
import { TopInfo } from "@/app/components/TopInfo";
import RaffleCard from "@/app/components/RaffleCard";
import ProfileCard from "@/app/components/ProfileCard";
import RewardsCard from "@/app/components/RewardsCard";
import { cards } from "@/app/types/commons";


function DashBoard() {
  const [expandedCard, setExpandedCard] = useState<cards>("");

  const handleCardClick = (id: cards) => {
    setExpandedCard(id)
  }

  return (
    <div className={styles["container--all"]}>
      <TopInfo eth="0.01" ethBonus="0.004" />

      <div className={styles["container--raffle-cards"]}>
        <RaffleCard
          onClick={handleCardClick}
          id="optimisim"
          raffleCardText="48 Hour OP Raffle"
          raffleCardChipsText={{ left: 0.002, right: "Optimisim" }}
          chipColor="red"
          entriesColor="blue"
          endsIn="1d: 01h: 22m"
          prizePotEth="0.05"
          prizePotSr="100"
          totalEntries="34/250"
          entries="1"
          networkIcon={Optimisim}
          bgImg={OptimisimBgImg}
          expandedCard={expandedCard}
          
        />
        <RaffleCard
          onClick={handleCardClick}
          id="base"
          raffleCardText="48 Hour OP Raffle"
          raffleCardChipsText={{ left: 0.002, right: "Base" }}
          chipColor="blue"
          entriesColor="opaque"
          endsIn="1d: 01h: 22m"
          prizePotEth="0.05"
          prizePotSr="100"
          totalEntries="34 / 250"
          entries="1"
          networkIcon={Base}
          bgImg={BaseBgImg}
          expandedCard={expandedCard}
        />
        <RaffleCard
          onClick={handleCardClick}
          id="mode"
          raffleCardText="48 Hour OP Raffle"
          raffleCardChipsText={{ left: 0.002, right: "Mode" }}
          chipColor="yellow"
          entriesColor="opaque"
          endsIn="1d: 01h: 22m"
          prizePotEth="0.05"
          prizePotSr="100"
          totalEntries="34/250"
          entries="1"
          networkIcon={Mode}
          bgImg={ModeBgImg}
          expandedCard={expandedCard}
        />
      </div>
      <div className={styles["container--profile-rewards"]}>
        <ProfileCard
          rank={3}
          userHash="0xD0be...051e"
          eth={0.12}
          srp={150}
          entries={12}
        />
        <RewardsCard
          optimisimEth={0.05}
          optimisimSrp={25}
          baseEth={0.05}
          baseSrp={25}
          modeEth={0.0}
          modeSrp={0}
        />
      </div>
    </div>
  );
}
export default DashBoard;
