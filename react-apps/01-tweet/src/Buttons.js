import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReply,
  faRetweet,
  faHeart,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

export function ReplyButton() {
  return <FontAwesomeIcon icon={faReply} />;
}
export function ReTweetButton({ count }) {
  return (
    <span className="retweet-btn">
      <FontAwesomeIcon icon={faRetweet} />
      {count > 0 && <span className="retweet">{count}</span>}
    </span>
  );
}
export function LikeButton({ count }) {
  return (
    <span className="like-btn">
      <FontAwesomeIcon icon={faHeart} />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
}
export function MoreOptionsButton() {
  return <FontAwesomeIcon icon={faEllipsisH} />;
}
