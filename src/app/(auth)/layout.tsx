import React from "react";
import CustomImage from "@/components/ui/Image/CustomImage";

import styles from "@/styles/layouts/auth.layout.module.scss";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.authLayout}>
      <div className={styles.contentHolder}>{children}</div>
      <div className={styles.imageHolder}>
        <CustomImage
          name="bg-auth.svg"
          alt="background image auth"
          fill={true}
          className={styles.authImage}
        />
      </div>
    </div>
  );
}
