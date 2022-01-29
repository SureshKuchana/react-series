import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const FileIcon = ({ file }) => {
  let icon;
  switch (file.type) {
    case "folder":
      icon = faFolder;
      break;
    case "file":
      icon = faFileAlt;
      break;

    default:
  }
  return <FontAwesomeIcon icon={icon} />;
};

export { FileIcon };
