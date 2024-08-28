"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Step, Stepper, useStepper } from "@/components/ui/stepper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { FirstStepForm } from "./step1-form";
import { SecondStepForm } from "./step2-form";
import { ThirdStepForm } from "./step3-form";
import { FourthStepForm } from "./step4-form";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StepperFormActions } from "./stepper-form-actions";

const steps = [
  { label: "Step 1", description: "About Community" },
  { label: "Step 2", description: "Style your community" },
  { label: "Step 3", description: "Add topics" },
  { label: "Step 4", description: "What kind of community is this?" },
];

export default function StepperForm() {
  return (
    <Stepper variant="line" initialStep={0} steps={steps}>
      {steps.map((stepProps, index) => {
        const StepForm = [
          FirstStepForm,
          SecondStepForm,
          ThirdStepForm,
          FourthStepForm,
        ][index];
        return (
          <Step key={stepProps.label} {...stepProps}>
            <>
              <Separator />
              <div className="my-8">
                <StepForm />
              </div>
            </>
          </Step>
        );
      })}
      <MyStepperFooter />
    </Stepper>
  );
}

function MyStepperFooter() {
  const { activeStep, resetSteps, steps } = useStepper();

  if (activeStep !== steps.length) {
    return null;
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <Button onClick={resetSteps}>Reset Stepper with Form</Button>
    </div>
  );
}
