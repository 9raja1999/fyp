import React from "react";
import styles from "@/styles/components/footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Job Portal</h2>
      </div>
      <div>
        <ul className={styles.linksAccess}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/jobs"}>Jobs</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.linksAccess}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/jobs"}>Jobs</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
