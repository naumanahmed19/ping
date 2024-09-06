"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useStepper } from "@/components/ui/stepper";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { Fingerprint, Globe, GlobeLock, UserRoundMinus } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  step1State,
  step2State,
  step3State,
  step4State,
} from "./atoms/formAtoms";
import { StepperFormActions } from "./stepper-form-actions";

import { useCreateCommunity } from "@/queries/communities.query";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  terms: z.boolean().refine((v) => v === true, { message: "Required" }),
  privacy: z.string().min(1, {
    message: "Required",
  }),
  mature: z.boolean().default(false),
});

export function FourthStepForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [step1] = useAtom(step1State);
  const [step2] = useAtom(step2State);
  const [step3] = useAtom(step3State);
  const [step4, setStep4] = useAtom(step4State);
  const { nextStep } = useStepper();

  const createCommunity = useCreateCommunity();
  const mutation = useMutation({ mutationFn: createCommunity });

  /**
   * Initializes the form with the specified default values and resolver.
   *
   * @param defaultValues - The default values for the form.
   * @param resolver - The resolver used to validate the form.
   */
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: step4,
  });

  /**
   * Handles form submission.
   *
   * @param _data - The data submitted from the form.
   */
  function onSubmit(_data: z.infer<typeof FormSchema>) {
    setStep4(_data);
    const allData = { ...step1, ...step2, ...step3, ..._data };

    mutation.mutate(allData, {
      onSuccess: (e) => {
        toast({ title: "Form submitted successfully!" });
        router.push("/communities/1");
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="block w-full space-x-3 space-y-0">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {[
                    {
                      value: "public",
                      label: "Public",
                      description: "Anyone can view and contribute",
                      icon: Globe,
                    },
                    {
                      value: "restricted",
                      label: "Restricted",
                      description:
                        "Anyone can view, but only approved users can contribute",
                      icon: Fingerprint,
                    },
                    {
                      value: "private",
                      label: "Private",
                      description:
                        "Only approved users can view and contribute",
                      icon: GlobeLock,
                    },
                  ].map((option) => (
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
                        <FormLabel className="text-sm">
                          {option.label}{" "}
                        </FormLabel>
                        <FormDescription className="text-xs">
                          {option.description}
                        </FormDescription>
                      </div>
                      <RadioGroupItem value={option.value} id={option.value} />
                    </FormLabel>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <FormField
          control={form.control}
          name="mature"
          render={({ field }) => (
            <FormItem className="grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg px-4 ring-1 ring-transparent ">
              <UserRoundMinus
                className="w-8 h-8 text-muted-foreground"
                strokeWidth={1}
              />
              <div className="space-y-0.5">
                <FormLabel className="text-sm">Mature (18+)</FormLabel>
                <FormDescription className="text-xs">
                  Users must be over 18 to view and contribute
                </FormDescription>
                <FormMessage />
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Separator />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="items-top flex space-x-2">
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    value={field.value ? "true" : "false"}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                      You agree to our Terms of Service and Privacy Policy.
                    </p>
                    <FormMessage />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <StepperFormActions />
      </form>
    </Form>
  );
}
