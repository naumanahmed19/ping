"use client";
import { FormDescription, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { UserRoundMinus } from "lucide-react";
const SwitchTile = ({ ...props }) => {
  return (
    <div className="grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg px-4 ring-1 ring-transparent ">
      <UserRoundMinus
        className="w-8 h-8 text-muted-foreground"
        strokeWidth={1}
      />
      <div className="space-y-0.5">
        <FormLabel className="text-sm">{props.tile?.label}</FormLabel>
        <FormDescription className="text-xs">
          {props?.tile?.description}
        </FormDescription>
        <FormMessage />
      </div>

      <Switch checked={props.value} onCheckedChange={props.onChange} />
    </div>
  );
};

export default SwitchTile;
