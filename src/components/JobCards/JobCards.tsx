import React from "react";
import styles from "@/styles/components/jobCards.module.scss";
import { Button } from "antd";
import Image from "next/image";

export default function JobCards() {
  return (
    <section className={styles.jobList}>
      <h3>Apply for Jobs</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        dolor obcaecati dolorem, enim accusantium fuga quas voluptates
        repellendus similique quo recusandae dolores ratione velit tempora,
        perferendis ipsum a libero vero!
      </p>
      {Array(8)
        .fill("")
        .map((el: any, i: number) => {
          return (
            <div className={styles.jobCard}>
              <div className={styles.imageHolder}>
                <Image
                  src={"/assets/images/banner.jpeg"}
                  fill={true}
                  alt="image"
                />
              </div>
              <h3>Job title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                id repellendus, libero animi neque maiores a officia!
                Reprehenderit in sunt adipisci deleniti qui? Rerum incidunt
                odit, rem laudantium distinctio temporibus!
              </p>

              <Button block type="primary">Apply</Button>
            </div>
          );
        })}
    </section>
  );
}
