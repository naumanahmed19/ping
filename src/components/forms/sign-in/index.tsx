"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SIGN_IN_FORM } from "@/constants/auth.constants";
import { z } from "zod";
import { FormGenerator } from "../../common/form-generator";
import { SignInSchema } from "./schema";

type Props = {};

const SignInForm = (props: Props) => {
  // const { isPending, onAuthenticateUser, register, errors } = useAuthSignIn();
  function onSubmit(_data: z.infer<typeof SignInSchema>) {
    console.log("Submitted", _data);
  }

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <FormGenerator
            schema={SignInSchema}
            fields={SIGN_IN_FORM}
            onSubmit={onSubmit}
            className="grid-cols-1 md:grid-cols-2 gap-4"
          >
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </FormGenerator>
        </CardContent>
      </Card>
    </>
  );
};

export default SignInForm;
