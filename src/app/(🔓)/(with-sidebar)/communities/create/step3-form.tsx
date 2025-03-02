"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { FormGenerator } from "@/components/common/form-generator";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useStepper } from "@/components/ui/stepper";
import TagsSelect from "@/components/ui/tags-select/tags-select";
import { useAtom } from "jotai";
import { categoriesData } from "../../../../../data";
import { step3State } from "./atoms/formAtoms";
import { STEP3_FIELDS } from "./form-fields";
import { STEP3_VALIDATIONS } from "./form-validations";
import { StepperFormActions } from "./stepper-form-actions";

export function ThirdStepForm() {
  const [formState, setFormState] = useAtom(step3State);
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof STEP3_VALIDATIONS>>({
    resolver: zodResolver(STEP3_VALIDATIONS),
    defaultValues: formState,
  });

  function onSubmit(_data: z.infer<typeof STEP3_VALIDATIONS>) {
    setFormState(_data);
    nextStep();
  }

  return (
    <>
      <FormGenerator
        defaultValues={formState}
        schema={STEP3_VALIDATIONS}
        fields={STEP3_FIELDS}
        onSubmit={onSubmit}
      >
        <StepperFormActions />
      </FormGenerator>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="topics"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Topics</FormLabel>
                <FormDescription>
                  Add up to 3 topics to help interested users to find your
                  community.
                </FormDescription>
                <FormMessage />

                <TagsSelect
                  maxTags={3}
                  {...field}
                  options={categoriesData}
                  onChange={(tags: number[]) => {
                    setFormState({ ...formState, topics: tags });
                    form.setValue("topics", tags);
                    console.log("Updated topics:", tags);
                    if (tags.length >= 3) {
                      console.log("tags.length >= 3", tags.length);
                      form.clearErrors("topics");
                    }
                  }}
                />
              </FormItem>
            )}
          />
          <StepperFormActions />
        </form>
      </Form>
    </>
  );
}
