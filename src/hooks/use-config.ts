import { Style } from "@/styles/styles";
import { Theme } from "@/styles/themes";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
type Config = {
  style: Style["name"];
  theme: Theme["name"];
  radius: number;
  containerLayout: "card" | "compact" | "list";
};

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  theme: "zinc",
  radius: 0.5,
  containerLayout: "compact",
});

export function useConfig() {
  return useAtom(configAtom);
}
