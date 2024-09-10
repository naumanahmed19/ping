import { Field } from "@/components/common/form-generator/Field";

export const SIGN_UP_FORM: Field[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Name",
    name: "name",
    type: "text",
  },

  {
    id: "2",
    inputType: "input",
    placeholder: "Email",
    name: "email",
    type: "email",
  },
  {
    id: "3",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
  },
];

export const SIGN_IN_FORM: Field[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "joe@ping.com",
    label: "Email",
    name: "email",
    type: "email",
    className: "grid gap-2",
  },
  {
    id: "4",
    inputType: "input",
    placeholder: "Enter your password",
    label: "Password",
    name: "password",
    type: "password",
    className: "grid gap-2",
  },
];

export const FORGOT_PASSWORD_FORM: Field[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Email",
    name: "email",
    type: "email",
  },
];
