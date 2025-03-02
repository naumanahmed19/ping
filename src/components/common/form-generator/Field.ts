export interface Field {
  id: string;
  type?: "email" | "text" | "password";
  inputType:
    | "separator"
    | "upload-tile"
    | "switch-tile"
    | "radio-tile"
    | "checkbox-tile"
    | "tags-select"
    | "topics-select"
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
    | "url"
    | "multiselect";
  options?: {
    description?: string;
    value: string | number;
    label: string;
    id?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  label?: string;
  description?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  flex?: boolean;
  disabled?: boolean;
  beforeFormField?: React.ReactNode;
  afterFormField?: React.ReactNode;
  tile?: {
    style?: string;
    icon?: React.ComponentType<{ className?: string }>;
    label?: string;
    description?: string;
  };
  getOptions?: () => void;
}
