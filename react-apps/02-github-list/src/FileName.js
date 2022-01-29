import React from "react";
import { FileIcon } from "./FileIcon";

const FileName = ({ file }) => (
  <>
    <td className="file-icon">
      <FileIcon file={file} />
    </td>
    <td className="file-name">{file?.name}</td>
  </>
);

export { FileName };
