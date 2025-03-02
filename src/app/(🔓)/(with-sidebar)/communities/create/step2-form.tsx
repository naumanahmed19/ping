"use client";

import * as z from "zod";

import { FormGenerator } from "@/components/common/form-generator";
import { useStepper } from "@/components/ui/stepper";
import { useAtom } from "jotai";
import { step2State } from "./atoms/formAtoms";
import { STEP2_FIELDS } from "./form-fields";
import { STEP2_VALIDATIONS } from "./form-validations";
import { StepperFormActions } from "./stepper-form-actions";

export function SecondStepForm() {
  const [formState, setFormState] = useAtom(step2State);
  const { nextStep } = useStepper();

  // Handle form submission
  function onSubmit(_data: z.infer<typeof STEP2_VALIDATIONS>) {
    setFormState(_data);
    nextStep();
  }

  return (
    <>
      <FormGenerator
        defaultValues={formState}
        schema={STEP2_VALIDATIONS}
        fields={STEP2_FIELDS}
        onSubmit={onSubmit}
        className="grid-cols-1 md:grid-cols-2 gap-4"
      >
        <StepperFormActions />
      </FormGenerator>
    </>
  );
}
