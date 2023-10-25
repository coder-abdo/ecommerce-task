"use client";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FC } from "react";
interface Props {
  ratings: number;
}
export const RatingComp: FC<Props> = ({ ratings }) => {
  return <Rating value={ratings} readOnly />;
};
