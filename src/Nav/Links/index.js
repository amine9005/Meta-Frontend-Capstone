import React from "react";

const Link = (props) => {
  return (
    <ul>
      {props.links.map((link) => (
        <li key={link.url}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Link;
