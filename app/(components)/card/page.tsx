"use client";

import Image from "next/image";
import styles from "@/app/board/page.module.css";
import { GameCard } from "@/app/(models)/GameCard";

type GameCardProps = {
  gameCard: GameCard;
  key: number;
  // handleOnclick: Function
};

export default function CardAdmin(props: GameCardProps) {
  function handleClick() {
    console.log({ props });
  }

  return (
    <main className={styles.main}>
      <div className="flex flex-col">
        <Image
          src={`/${props?.gameCard?.logo || ""}`}
          title={props.gameCard.title}
          alt={props.gameCard.title}
          onClick={handleClick}
          className={styles.img}
          key={props.key}
          width={360}
          height={420}
        />
        <p className="py-5 m-5">{props.gameCard.explanation}</p>
      </div>
    </main>
  );
}
