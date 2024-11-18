"use client";

import React, { useMemo, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { Empty } from "antd";

interface CustomImageProps extends Omit<ImageProps, "src"> {
  name: string;
}

export default function CustomImage(props: CustomImageProps) {
  const { name, ...rest } = props;
  const [imageType, setImageType] = useState<string>("");
  const imageFile: string | null = useMemo(() => {
    if (name) {
      const fileExt = name.split(".").pop();
      const base: string = `/assets/images/`;
      
      setImageType(fileExt || "");

      return `${base}${name}`;
    } else {
      console.error("No icon name provided!");
      return null;
    }
  }, [name]);


  if (!imageFile || !imageType) return <Empty description="no image found" />;
  return <Image src={imageFile} {...rest} />;
}
