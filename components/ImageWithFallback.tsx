"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { IMAGE_BLUR_DATA_URL, PLACEHOLDER_IMAGE } from "@/lib/constants";

type ImageWithFallbackProps = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  fallbackSrc?: string;
};

export function ImageWithFallback({
  src,
  fallbackSrc = PLACEHOLDER_IMAGE,
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      placeholder="blur"
      blurDataURL={IMAGE_BLUR_DATA_URL}
      onError={() => setCurrentSrc(fallbackSrc)}
    />
  );
}
