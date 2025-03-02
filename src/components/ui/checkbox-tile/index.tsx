"use client";
import { Checkbox } from "@/components/ui/checkbox";
const CheckboxTile = ({ ...props }) => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id="terms"
        checked={props.value}
        onCheckedChange={props.onChange}
        value={props.value ? "true" : "false"}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {props.tile?.label}
        </label>
        <p className="text-sm text-muted-foreground">
          {props.tile?.description}
        </p>
      </div>
    </div>
  );
};

export default CheckboxTile;
