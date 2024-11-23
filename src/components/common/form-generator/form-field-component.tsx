import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select/multi-select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

export function FormFieldComponent({
  field,
  label,
  placeholder,
  type,
  inputType,
  disabled,
  options,
  getOptions,
  onChange,
}: {
  field: any;
  label?: string;
  placeholder: string;
  type?: string;
  inputType?: string;
  disabled?: boolean;
  options?: any;
  getOptions?: any;
  onChange?: any;
}) {
  const [isLoadingOptions, setIsLoadingOptions] = useState(false);
  const [optionsList, setOptionsList] = useState<any[]>(options);

  //if getOptions is provided, fetch the options
  useEffect(() => {
    if (getOptions) {
      setIsLoadingOptions(true);
      getOptions().then((values: any[]) => {
        setIsLoadingOptions(false);
        setOptionsList(values);
      });
    }
  }, [getOptions]);

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

      case "multiselect":
        return (
          <MultiSelect
            {...field}
            options={optionsList || []}
            defaultValue={[]}
            placeholder={placeholder || "Select"}
            variant="inverted"
            animation={2}
            maxCount={3}
            onValueChange={(value) => onChange(field.name, value)}
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
