import { Link } from "react-router-dom";

export default function EmptyState({ message, linkText, linkTo }) {
  return (
    <div className="bg-card rounded-2xl border-2 border-border p-7 text-center text-muted-foreground">
      {message}{" "}
      <Link to={linkTo} className="font-bold text-blue-burrinho-deep underline">
        {linkText}
      </Link>
    </div>
  );
}
