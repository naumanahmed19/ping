import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function FormFieldComponent({
  field,
  label,
  placeholder,
  type,
  inputType,
  disabled,
}: {
  field: any;
  label?: string;
  placeholder: string;
  type: string;
  inputType?: string;
  disabled?: boolean;
}) {
  const renderInput = () => {
    switch (inputType) {
      case "input":
        return (
          <Input
            placeholder={placeholder}
            {...field}
            type={type}
            disabled={disabled}
            value={field.value || ""}
          />
        );
      case "textarea":
        return (
          <Textarea
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            value={field.value || ""}
          />
        );
      // Add more cases here for different input types
      default:
        return (
          <Input
            placeholder={placeholder}
            {...field}
            type={type}
            disabled={disabled}
            value={field.value || ""}
          />
        );
    }
  };

  return (
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>{renderInput()}</FormControl>
      <FormMessage />
    </FormItem>
  );
}
