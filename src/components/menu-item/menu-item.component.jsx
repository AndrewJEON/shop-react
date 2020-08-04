import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <ht className="title">{title}</ht>
      <span className="subtitle">Show now</span>
    </div>
  </div>
);

export default MenuItem;
