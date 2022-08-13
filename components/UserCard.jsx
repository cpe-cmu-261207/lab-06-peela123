import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React from "react";
import { useState } from "react";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="border-bottom"
      onClick={() => {
        isClicked ? setIsClicked(false) : setIsClicked(true);
      }}
    >
      <div className="d-flex align-items-center p-3">
        <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {isClicked ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {isClicked && (
        <UserCardDetail email={props.email} address={props.address} />
      )}
    </div>
  );
}