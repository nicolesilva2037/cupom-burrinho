import { Link } from "react-router-dom";

export default function MenuItemLog({ url, label, customClass }) {
  return (
    <Link to={url} className={customClass}>
      {label}
    </Link>
  );
}
