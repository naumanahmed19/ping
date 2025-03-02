"use client";
import { FormDescription, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const RadioTile = ({ ...props }) => {
  return (
    <RadioGroup onValueChange={props.onChange} defaultValue={props.value}>
      {props?.options.map((option: Field.options) => (
        <FormLabel
          key={option.value}
          className=" items-center space-x-2 has-[:checked]:border has-[:checked]:text-accent-foreground has-[:checked]:bg-accent grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-secondary"
          htmlFor={option.value}
        >
          <option.icon
            className="w-8 h-8 text-muted-foreground"
            strokeWidth={1}
          />
          <div className="space-y-0.5">
            <FormLabel className="text-sm">{option.label} </FormLabel>
            <FormDescription className="text-xs">
              {option.description}
            </FormDescription>
          </div>
          <RadioGroupItem value={option.value} id={option.value} />
        </FormLabel>
      ))}
    </RadioGroup>
  );
};

export default RadioTile;
