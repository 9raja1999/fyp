import Image from "next/image";
import React from "react";
import styles from "@/styles/components/banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.bannerImage}>
      <Image src={"/assets/images/banner2.jpeg"} fill={true} alt="image" />
    </div>
  );
}
