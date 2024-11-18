import React from "react";
import { Button } from "antd";
import styles from "@/styles/components/header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <nav className={styles.header}>
      <h1 className={styles.logo}>Job Portal</h1>
      <ul className={styles.navList}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/jobs"}>Jobs</Link>
        </li>
        <li>
          <Button href="/login">Login</Button>
        </li>
        <li>
          <Button href="/sign-up">Signup</Button>
        </li>
      </ul>
    </nav>
  );
}
