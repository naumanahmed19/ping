"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useStepper } from "@/components/stepper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { StepperFormActions } from "./stepper-form-actions";
import InputFileUpload from "@/components/fileUpload/input-file-upload";
import { useAtom } from "jotai";
import { step2State } from "./atoms/formAtoms";

const FormSchema = z.object({
  icon_img: z.string().min(1, "Icon is required"),
  banner_img: z.string().min(1, "Banner is required"),
});

export function SecondStepForm() {
  const [formState, setFormState] = useAtom(step2State);
  const { nextStep } = useStepper();

  // Set up form using react-hook-form and zodResolver
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: formState,
  });

  // Handle file change
  function handleFileChange(result: string, fieldName: string) {
    setFormState({ ...formState, [fieldName]: result });
    form.setValue(fieldName, result);
    form.clearErrors(fieldName);
  }

  // Handle form submission
  function onSubmit(_data: z.infer<typeof FormSchema>) {
    setFormState(_data);
    nextStep();
  }

  return (
    <Form {...form}>
      {/* {formState.icon_img && (
        <img src={formState.icon_img} alt="Icon Preview" />
      )} */}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="icon_img"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputFileUpload
                  placeholder="Community Icon"
                  {...field}
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "icon_img")}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="banner_img"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputFileUpload
                  placeholder="Banner Icon"
                  {...field}
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "banner_img")}
                />
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
