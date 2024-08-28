"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useStepper } from "@/components/ui/stepper";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { StepperFormActions } from "./stepper-form-actions";
import TagsSelect from "@/components/ui/tags-select/tags-select";
import { categoriesData } from "@/data";
import { step3State } from "./atoms/formAtoms";
import { useAtom } from "jotai";

const MAX_TAGS = 3;

const FormSchema = z.object({
  topics: z
    .array(z.number())
    .min(MAX_TAGS, "You must select at least three tag."),
});

export function ThirdStepForm() {
  const [formState, setFormState] = useAtom(step3State);
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: formState,
  });

  function onSubmit(_data: z.infer<typeof FormSchema>) {
    setFormState(_data);
    nextStep();
  }

  return (
    <>
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
                  maxTags={MAX_TAGS}
                  {...field}
                  categories={categoriesData}
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
