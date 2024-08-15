"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ectqYw9kJqw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Editor from "@/components/ui/editor";
import { Container } from "@/components/base/container";
import TeamSwitcher from "@/components/team-switcher";
import { Sidebar } from "./sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Text,
  ImagePlay,
  Link,
  Image,
  DockIcon,
  Type,
  Paperclip,
  Mic,
  UnderlineIcon,
  ChevronsUpDown,
  Check,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { InputFileUpload } from "@/components/fileUpload/input-file-upload";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MinimalTiptapEditor } from "@/components/minimal-tiptap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { CheckIcon, FontBoldIcon, FontItalicIcon } from "@radix-ui/react-icons";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {  formSchema } from "./form-schema";
export default function Component() {

   
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Container>
      <Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Create post</CardTitle>
          <CardDescription>
            Fill out the form below to add a new recipe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="communityId"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TeamSwitcher
                        onSelect={(team) => {
                          form.setValue("communityId", team?.id);
                          console.log("clicked", team, field);
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <div className="space-y-1.5">
                      <div className="grid grid-cols-5 gap-2">
                        {["Text", "Image", "Link"].map((theme) => {
                          const isActive = "Text" === theme;

                          return (
                            <Button
                              variant={"outline"}
                              size="sm"
                              key={theme}
                              onClick={() => {
                                console.log("clicked");
                              }}
                              className={cn(
                                "justify-start",
                                isActive && "border-2 border-primary"
                              )}
                            >
                              <span
                                className={cn(
                                  isActive ? "bg-primary" : "bg-background",
                                  "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full border-2 "
                                )}
                              >
                                {isActive && (
                                  <CheckIcon className="h-4 w-4 text-white" />
                                )}
                              </span>
                              <div className="text-sm">{theme}</div>
                              <Type className="size-3 mr-3 ml-auto" />
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                    {/* <FormControl>
              <ToggleGroup type="single" className="flex items-center justify-start space-y-2">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
      Text
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <ImagePlay className="size-6" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
      <Link className="size-6" />
      </ToggleGroupItem>
    </ToggleGroup>
              </FormControl> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Description</FormLabel>
                    <FormControl>
                      <MinimalTiptapEditor
                        {...field}
                        throttleDelay={2000}
                        className={cn("w-full", {
                          "border-destructive focus-within:border-destructive":
                            form.formState.errors.description,
                        })}
                        editorContentClassName="p-5"
                        output="html"
                        placeholder="Type your description here..."
                        autofocus={true}
                        immediatelyRender={true}
                        editable={true}
                        injectCSS={true}
                        shouldRerenderOnTransaction={false}
                        editorClassName="focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button type="submit" size="lg" >
          Submit
        </Button> */}

              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Save as draft</div>
                <Separator orientation="vertical" />
                <Button>Publish Post</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
}
