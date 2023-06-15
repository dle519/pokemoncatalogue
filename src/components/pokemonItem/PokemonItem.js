import React from "react";
import styles from "./PokemonItem.module.css";

function PokemonItem({ name, url, img }) {
  return (
    <a
      className={styles.pokemon}
      href={url}
      target="_blank"
      and
      rel="noopener noreferrer"
    >
      <div className={styles["pokemon-image"]}>
        {" "}
        <img src={img}></img>{" "}
      </div>
      <div className={styles["pokemon-footer"]}>
        <div className={styles["pokemon-name"]}>{name}</div>
      </div>
    </a>
  );
}

export default PokemonItem;
