"use client";

import { FormGenerator } from "@/components/common/form-generator";
import { useStepper } from "@/components/ui/stepper";
import { useToast } from "@/components/ui/use-toast";
import { COMMUNITY_FORM } from "@/constants/community.constants";
import { useAtom } from "jotai";
import * as z from "zod";
import { step1State } from "./atoms/formAtoms";
import { Step1Schema } from "./schema";
import { StepperFormActions } from "./stepper-form-actions";

/**
 * Renders the first step form for creating a community.
 *
 * @returns The JSX element representing the first step form.
 */
export function FirstStepForm() {
  const [formState, setFormState] = useAtom(step1State);
  const { nextStep } = useStepper();
  const { toast } = useToast();

  // Handle form submission
  function onSubmit(_data: z.infer<typeof Step1Schema>) {
    toast("Submitted");

    setFormState(_data); // Update form state with submitted data
    nextStep(); // Move to the next step in the stepper
  }

  return (
    <FormGenerator
      defaultValues={formState}
      schema={Step1Schema}
      fields={COMMUNITY_FORM}
      onSubmit={onSubmit}
      className="grid-cols-1 md:grid-cols-2 gap-4"
    >
      <StepperFormActions />
    </FormGenerator>
  );
}
