"use client";

import { login } from "@/actions/login";
import { FormGenerator } from "@/components/common/form-generator";
import { Button } from "@/components/ui/button";
import { SIGN_UP_FORM } from "@/constants/auth.constants";
import { useState, useTransition } from "react";
import { z } from "zod";
import { SignUpSchema } from "./schema";

type Props = {};

// const OtpInput = dynamic(
//   () =>
//     import("@/components/global/otp-input").then(
//       (component) => component.default,
//     ),
//   { ssr: false },
// );

const SignUpForm = (props: Props) => {
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

  function onSubmit(values: z.infer<typeof SignUpSchema>) {
    reset();
    startTransition(() => {
      login(values).then((data) => {
        if (data) {
          console.error("Failed to login:", data.error);
          setErrorMessage(data.error);
          // setErrorMessage(data.success);
        }
      });
    });
  }

  return (
    <FormGenerator
      schema={SignUpSchema}
      fields={SIGN_UP_FORM}
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
  );
};

export default SignUpForm;
