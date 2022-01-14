import React from "react";
import { Avatar } from "./Avatar";
import { Message } from "./Message";
import { Author } from "./Author";
import { Time } from "./Time";
import {
  ReplyButton,
  ReTweetButton,
  LikeButton,
  MoreOptionsButton,
} from "./Buttons";

export function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <ReTweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}
