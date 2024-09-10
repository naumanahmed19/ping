"use client";

import { login } from "@/actions/auth/login";
import { Button } from "@/components/ui/button";
import { SIGN_IN_FORM } from "@/constants/auth.constants";
import { SignInSchema } from "@/lib/schemas/auth.schema";
import { useState, useTransition } from "react";
import { z } from "zod";
import { FormGenerator } from "../form-generator";

type Props = {};

const SignInForm = (props: Props) => {
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

  function onSubmit(values: z.infer<typeof SignInSchema>) {
    reset();
    startTransition(() => {
      login(values).then((data) => {
        if (data) {
          setErrorMessage(data.error);
        }
      });
    });
  }

  return (
    <>
      <FormGenerator
        schema={SignInSchema}
        fields={SIGN_IN_FORM}
        disabled={isPending}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        className="grid-cols-1 md:grid-cols-2 gap-4"
      >
        {errorMessage && (
          <div className="text-red-600 text-sm">{errorMessage}</div>
        )}
        <Button disabled={isPending} className="w-full" type="submit">
          Sign In
        </Button>
      </FormGenerator>
    </>
  );
};

export default SignInForm;
