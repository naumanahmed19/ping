"use client";

import { forgotPassword } from "@/actions/auth/forgot-password";
import { FormGenerator } from "@/components/common/form-generator";
import { Button } from "@/components/ui/button";
import { FORGOT_PASSWORD_FORM } from "@/constants/auth.constants";
import { ForgotPassowrdSchema } from "@/lib/schemas/auth.schema";
import { useState, useTransition } from "react";
import { z } from "zod";

type Props = {};

const ForgotPasswordForm = (props: Props) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  function reset() {
    if (errorMessage || successMessage) {
      setErrorMessage("");
      setSuccessMessage("");
    }
  }

  function onSubmit(values: z.infer<typeof ForgotPassowrdSchema>) {
    reset();
    startTransition(() => {
      forgotPassword(values).then((data) => {
        if (data) {
          setErrorMessage(data.error);
        }
      });
    });
  }

  return (
    <>
      <FormGenerator
        schema={ForgotPassowrdSchema}
        fields={FORGOT_PASSWORD_FORM}
        disabled={isPending}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        className="grid-cols-1 md:grid-cols-2 gap-4"
      >
        {errorMessage && (
          <div className="text-red-600 text-sm">{errorMessage}</div>
        )}
        <Button disabled={isPending} className="w-full" type="submit">
          Send Reset Link
        </Button>
      </FormGenerator>
    </>
  );
};

export default ForgotPasswordForm;
