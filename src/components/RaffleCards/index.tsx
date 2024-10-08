import React, { type ElementType, useEffect, useRef, useState } from "react";
import Optimisim from "@/public/images/optimisim-icon.svg";
import Mode from "@/public/images/mode-icon.svg";
import Base from "@/public/images/base-icon.svg";
import OptimisimBgImg from "@/public/images/optimisim-bg-img.svg";
import BaseBgImg from "@/public/images/base-bg-img.svg";
import ModeBgImg from "@/public/images/mode-bg-img.svg";
import Raffle from "./Raffle";
import styles from "./styles.module.css";
import { useQuery } from "react-query";
import { getRaffleCardsData } from "@/functions/fetchFunctions";
import type { RaffleCardsData } from "@/types/raffleCards";
import RaffleCardSkeleton from "./Raffle/Skeleton";

function AssetsParser(asset: string): ElementType {
  switch (asset) {
    case "OptimisimBg":
      return OptimisimBgImg as ElementType;
    case "BaseBg":
      return BaseBgImg as ElementType;
    case "ModeBg":
      return ModeBgImg as ElementType;
    case "OptimisimIcon":
      return Optimisim as ElementType;
    case "BaseIcon":
      return Base as ElementType;
    case "ModeIcon":
      return Mode as ElementType;
    default:
      return Optimisim as ElementType;
  }
}

function RaffleCards() {
  const { data: raffleCardsData, status: _status } = useQuery<
    RaffleCardsData[]
  >("raffleCardsData", getRaffleCardsData);
  const [expandedCard, setExpandedCard] = useState<string | null>("");

  const handleCardClick = (id: string | null) => {
    setExpandedCard(id);
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  };

  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, [expandedCard]);

  if (raffleCardsData) {
    return (
      <div ref={containerRef} className={styles["container--raffle-cards"]}>
        {raffleCardsData?.map((item) => {
          const bgImg = item.bgImg as keyof typeof AssetsParser;
          const networdIcon = item.networkIcon as keyof typeof AssetsParser;
          return (
            <Raffle
              offset={containerHeight}
              key={item.id}
              onClick={handleCardClick}
              id={item.id}
              raffleCardText={item.raffleCardText}
              raffleCardChipsText={{
                value: item.raffleCardChip?.value,
                network: item.raffleCardChip?.network,
              }}
              chipColor={item.chipColor}
              endsIn={item.end}
              prizePotEth={item.prizePotEth}
              prizePotSr={item.prizePotSr}
              totalEntries={item.totalEntries}
              currentEntries={item.currentEntries}
              entries={item.entries}
              networkIcon={AssetsParser(networdIcon)}
              bgImg={AssetsParser(bgImg)}
              expandedCard={expandedCard}
              round={item.round}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div ref={containerRef} className={styles["container--raffle-cards"]}>
        <RaffleCardSkeleton />
        <RaffleCardSkeleton />
      </div>
    );
  }
}

export default RaffleCards;
