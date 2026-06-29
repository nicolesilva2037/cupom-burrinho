export default function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  disabled,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full rounded-full border-2 border-border px-5 py-2.5 text-sm outline-none transition-colors ${
          disabled
            ? "bg-accent/50 text-muted-foreground"
            : "bg-background focus:border-primary"
        }`}
      />
    </div>
  );
}
