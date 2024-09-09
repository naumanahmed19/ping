export interface Field {
  id: string;
  type: "email" | "text" | "password";
  inputType:
    | "select"
    | "input"
    | "textarea"
    | "radio"
    | "checkbox"
    | "file"
    | "date"
    | "time"
    | "datetime-local"
    | "number"
    | "range"
    | "color"
    | "search"
    | "tel"
    | "url";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  name: string;
  className?: string;
  flex?: boolean;
  disabled?: boolean;
}
