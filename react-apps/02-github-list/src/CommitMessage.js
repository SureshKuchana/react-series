import React from "react";

const CommitMessage = ({ commit }) => (
  <td className="commit-message">{commit?.message}</td>
);

export { CommitMessage };
