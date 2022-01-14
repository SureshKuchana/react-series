import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Tweet } from "./Tweet";

const data = {
  message: "A Tweet about something cool",
  gravatar: "",
  author: {
    handle: "@sureshk",
    name: "Suresh Koochana",
  },
  likes: 17,
  retweets: 2,
  timestamp: "2019-07-10 21:09:52",
};

ReactDOM.render(<Tweet tweet={data} />, document.querySelector("#root"));
