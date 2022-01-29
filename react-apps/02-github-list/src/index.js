import React from "react";
import ReactDOM from "react-dom";
import { FileList } from "./FileList";
import "./index.css";

const data = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2019-01-07 21:24:00",
    latestCommit: {
      message: "Initial Commit",
    },
  },
  {
    id: 1,
    name: "tests",
    type: "folder",
    updated_at: "2019-01-07 21:24:00",
    latestCommit: {
      message: "Initial Commit",
    },
  },
  {
    id: 1,
    name: "README",
    type: "file",
    updated_at: "2019-01-07 21:24:00",
    latestCommit: {
      message: "Added a readme",
    },
  },
];

ReactDOM.render(<FileList files={data} />, document.getElementById("root"));
