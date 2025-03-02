import CheckboxTile from "@/components/ui/checkbox-tile";
import InputFileUpload from "@/components/ui/fileUpload/input-file-upload";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select/multi-select";
import RadioTile from "@/components/ui/radio-tile";
import { Separator } from "@/components/ui/separator";
import SwitchTile from "@/components/ui/switch-tile";
import TagsSelect from "@/components/ui/tags-select/tags-select";
import { Textarea } from "@/components/ui/textarea";
import TopicSelect from "@/components/ui/topic-tags/topic-tags";
import { useEffect, useState } from "react";

export function FormFieldComponent({ field, filedAttributes, onChange }) {
  const {
    label,
    description,
    placeholder,
    type,
    inputType,
    disabled,
    options,
    getOptions,
    tile,
  } = filedAttributes;

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

      case "upload-tile":
        return (
          <InputFileUpload
            placeholder={placeholder}
            {...field}
            accept="image/*"
            disabled={disabled}
            onChange={(value: string) => onChange(field.name, value)}
          />
        );
      case "radio-tile":
        return (
          <RadioTile
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            options={optionsList || []}
            onChange={(value: string) => onChange(field.name, value)}
          />
        );
      case "switch-tile":
        return (
          <SwitchTile
            tile={tile}
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            onChange={(value: string) => onChange(field.name, value)}
          />
        );
      case "checkbox-tile":
        return (
          <CheckboxTile
            tile={tile}
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            onChange={(value: string) => onChange(field.name, value)}
          />
        );
      case "tags-select":
        return (
          <TagsSelect
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            options={optionsList || []}
            onChange={(value: string) => onChange(field.name, value)}
          />
        );
      case "topics-select":
        return (
          <TopicSelect
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            onChange={(value: string) => onChange(field.name, value)}
          />
        );
      case "separator":
        return <Separator />; // or use a custom separator component

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
      {description && <FormDescription>{description}</FormDescription>}
      <FormControl>{renderInput()}</FormControl>
      <FormMessage />
    </FormItem>
  );
}
