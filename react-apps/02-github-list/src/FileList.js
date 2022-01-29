import React from "react";
import { FileListItem } from "./FileListItem";

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {React.Children.toArray(
        files.map((file) => <FileListItem file={file} />)
      )}
    </tbody>
  </table>
);

export { FileList };
