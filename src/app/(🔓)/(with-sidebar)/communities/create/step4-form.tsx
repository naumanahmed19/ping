"use client";

import { createCommunity } from "@/actions/community/create-community";
import { useStepper } from "@/components/ui/stepper";
import { useToast } from "@/components/ui/use-toast";
import { useAtom } from "jotai";
import * as z from "zod";
import {
  step1State,
  step2State,
  step3State,
  step4State,
} from "./atoms/formAtoms";
import { StepperFormActions } from "./stepper-form-actions";

import { FormGenerator } from "@/components/common/form-generator";
import { useRouter } from "next/navigation";
import { STEP4_FIELDS } from "./form-fields";
import { STEP4_VALIDATIONS } from "./form-validations";

export function FourthStepForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [step1] = useAtom(step1State);
  const [step2] = useAtom(step2State);
  const [step3] = useAtom(step3State);
  const [step4, setStep4] = useAtom(step4State);
  const { nextStep } = useStepper();

  // const createCommunity = useCreateCommunity();
  // const mutation = useMutation({ mutationFn: createCommunity });

  /**
   * Handles form submission.
   *
   * @param _data - The data submitted from the form.
   */
  function onSubmit(_data: z.infer<typeof STEP4_VALIDATIONS>) {
    setStep4({
      privacy: _data.privacy,
      mature: _data.mature,
      terms: _data.terms,
    });
    const allData = { ...step1, ...step2, ...step3, ..._data };

    createCommunity(allData).then((data) => {
      if (data) {
        console.log(data);
      }
    });

    // mutation.mutate(allData, {
    //   onSuccess: (e) => {
    //     toast({ title: "Form submitted successfully!" });
    //     router.push("/communities/1");
    //   },
    //   onError: (error) => {
    //     toast({
    //       variant: "destructive",
    //       title: "Uh oh! Something went wrong.",
    //       description: "There was a problem with your request.",
    //     });
    //   },
    // });
  }

  return (
    <FormGenerator
      defaultValues={step4}
      schema={STEP4_VALIDATIONS}
      fields={STEP4_FIELDS}
      onSubmit={onSubmit}
      className="grid-cols-1 md:grid-cols-2 gap-4"
    >
      <StepperFormActions />
    </FormGenerator>
  );
}
