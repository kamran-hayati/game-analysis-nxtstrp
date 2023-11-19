"use client";

import CardAdmin from "@/app/(components)/card/page";
import styles from "./page.module.css";
import { GameCard } from "../(models)/GameCard";

export default function BoardAdmin() {
  function handleClick(e: any) {
    console.log("Clicked me!");
  }

  const mkCard = (key: number) => (
    <CardAdmin
      gameCard={{
        title: "card title",
        logo: "img/chip_card_480px.png",
        explanation: "Some discription...",
      }}
      key={key}
    />
  );

  return (
    <main className={styles.main}>
      <div className="c-1 flex justified p-5">
        {[1, 2, 3, 4, 5, 6].map((i) => mkCard(i))}
      </div>
    </main>
  );
}
