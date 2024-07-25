import React, { useContext } from "react";
import styles from "./styles.module.css";
import TicketImg from "@/public/images/ticket-white-img.svg";
import { Grid, SvgIcon } from "@mui/material";
import { TicketsContext } from "../Raffle";

function MyTickets() {
  const ticketsContext = useContext(TicketsContext);
  return (
    <div
      className={`${styles["container--all"]} ${ticketsContext.state.tickets.length > 0 ? styles["container--all--blue"] : styles["container--all--dark"]}`}
    >
      <h2 style={{ margin: "0px" }}>My Tickets</h2>
      {ticketsContext.state.tickets.length == 0 && (
        <p className={styles["text"]}>You have not bought any tickets yet.</p>
      )}
      <Grid container spacing={1} style={{ width: "100%", margin: 0 }}>
        {ticketsContext.state.tickets &&
          ticketsContext.state.tickets.map((ticket, index) => (
            <Grid item xs={3} key={index}>
              <div className={styles["container--ticket"]}>
                <p>{ticket}</p>
                <SvgIcon
                  component={TicketImg}
                  inheritViewBox
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    cursor: "default",
                  }}
                />
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default MyTickets;
