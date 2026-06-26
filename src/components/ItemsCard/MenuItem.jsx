import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ url, label, customClass }) {
  return (
    <Link to={url} className={customClass}>
      {label}
    </Link>
  );
}
