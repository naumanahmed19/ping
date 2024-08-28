"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useStepper } from "@/components/ui/stepper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { StepperFormActions } from "./stepper-form-actions";
import { Textarea } from "@/components/ui/textarea";
import { useAtom } from "jotai";
import { step1State } from "./atoms/formAtoms";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

/**
 * Renders the first step form for creating a community.
 *
 * @returns The JSX element representing the first step form.
 */
export function FirstStepForm() {
  const [formState, setFormState] = useAtom(step1State);
  const { nextStep } = useStepper();
  const { toast } = useToast();
  // Initialize the form with react-hook-form and Zod resolver
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: formState, // Set default values from form state
  });

  // Handle form submission
  function onSubmit(_data: z.infer<typeof FormSchema>) {
    toast("Submitted");

    setFormState(_data); // Update form state with submitted data
    nextStep(); // Move to the next step in the stepper
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Community Name</FormLabel>
              <FormControl>
                <Input placeholder="Community Name" {...field} />
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Community description" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <StepperFormActions />
      </form>
    </Form>
  );
}
