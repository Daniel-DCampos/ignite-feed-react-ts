import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasborder?: boolean;
}

export function Avatar({ hasborder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasborder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
