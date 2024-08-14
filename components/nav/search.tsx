"use client";

import { Input } from "@/components/ui/input";
import {  
  
  Command,
  
  CommandInput, CommandList, CommandGroup, CommandItem, CommandEmpty } from "cmdk";
import { useState, useCallback } from "react";
import { useDebounce } from "use-debounce";
import { Command as CommandPrimitive } from "cmdk";
import { Delete, Loader2, Pencil, Search as SearchIcon } from "lucide-react";

import { FormMessages } from "@/components/form-messages";
import useSWR from "swr";

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface CommonProps {
  selectedPlaceId: string;
  setSelectedPlaceId: (placeId: string) => void;
  setIsOpenDialog: (isOpen: boolean) => void;
  showInlineError?: boolean;
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  placeholder?: string;
}

export function Search(props: CommonProps) {
  const {
    selectedPlaceId,
    setSelectedPlaceId,
    setIsOpenDialog,
    showInlineError = false,
    searchInput,
    setSearchInput,
    placeholder = "Enter address",
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const handleKeyDown = (event: React.KeyboardEvent<SVGSVGElement>) => {
    if (event.key === "Escape") {
      close();
    }
  };

  const [debouncedSearchInput] = useDebounce(searchInput, 500);

  const { data, isLoading } = useSWR(
    `/api/address/mock-autocomplete?input=${debouncedSearchInput}`,
    fetcher,
  );

  const predictions = data?.data || [];

  return (
    <div>
      <Command className="overflow-visible">
      
         
        <div className="flex w-full items-center justify-between rounded-lg border bg-background ring-offset-background text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <SearchIcon className="ml-3 text-muted-foreground" />
          <CommandPrimitive.Input
            value={searchInput}
            onValueChange={setSearchInput}
            onBlur={close}
            onFocus={open}
            placeholder={placeholder}
            className="w-full p-3 rounded-lg outline-none"
          />
        </div>
        {searchInput !== "" && !isOpen && !selectedPlaceId && showInlineError && (
          <FormMessages
            type="error"
            className="pt-1 text-sm"
            messages={["Select a valid address from the list"]}
          />
        )}

        {isOpen && (
          <div className="relative animate-in fade-in-0 zoom-in-95 h-auto">
            <CommandList>
              <div className="absolute top-1.5 z-50 w-full">
                <CommandGroup className="relative h-auto z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md bg-background">
                  {isLoading ? (
                    <div className="h-28 flex items-center justify-center">
                      <Loader2 className="size-6 animate-spin" />
                    </div>
                  ) : (
                    <>
                      {predictions.map(
                        (prediction: {
                          placePrediction: {
                            placeId: string;
                            place: string;
                            text: { text: string };
                          };
                        }) => (
                          <CommandPrimitive.Item
                            value={prediction.placePrediction.text.text}
                            onSelect={() => {
                              setSearchInput("");
                              setSelectedPlaceId(prediction.placePrediction.place);
                              setIsOpenDialog(true);
                            }}
                            className="flex select-text flex-col cursor-pointer gap-0.5 h-max p-2 px-3 rounded-md aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent hover:text-accent-foreground items-start"
                            key={prediction.placePrediction.placeId}
                            onMouseDown={(e) => e.preventDefault()}
                          >
                            {prediction.placePrediction.text.text}
                          </CommandPrimitive.Item>
                        ),
                      )}
                    </>
                  )}

                  <CommandEmpty>
                    {!isLoading && predictions.length === 0 && (
                      <div className="py-4 flex items-center justify-center">
                        {searchInput === ""
                          ? "Please enter an address"
                          : "No address found"}
                      </div>
                    )}
                  </CommandEmpty>
                </CommandGroup>
              </div>
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
}