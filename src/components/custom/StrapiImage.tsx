import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
  priority,
  style
}: Readonly<StrapiImageProps>) {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallbackUrl = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      priority={priority ?? false}
      style={style}
      src={imageUrl ?? imageFallbackUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
}