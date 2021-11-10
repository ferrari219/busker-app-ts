/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { ReactComponent as Colors } from '../assets/colors.svg';
import * as icons from "./svg";

const iconStyle = css`
  width: 5rem;
  height: auto;
`;

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함
// console.log(iconTypes); //배열화로 바꾼 형태

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  fill?: string;
  /** 아이콘 크기 */
  size?: string | number;
  /** 아이콘 클래스화 */
  className?: string;
  /** 아이콘 클래스화 */
  round?: "0" | "5" | "10";
};

const Icon = ({
  icon,
  fill = "#333",
  size = "2rem",
  round,
  className,
}: IconProps) => {
  const SVGIcon = icons[icon];
  // console.log(SVGIcon);
  return (
    <SVGIcon
      css={[iconStyle, { fill, width: size, height: size }]}
      className={[className, `round-${round}`].join(" ")}
    />
  );
};

export default Icon;
