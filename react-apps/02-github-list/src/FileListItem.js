import React from "react";
import { CommitMessage } from "./CommitMessage";
import { FileName } from "./FileName";
import Time from "./Time";

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <FileName file={file} />
    <CommitMessage commit={file.latestCommit} />
    <td className="age">
      <Time time={file?.updated_at} />
    </td>
  </tr>
);

export { FileListItem };
