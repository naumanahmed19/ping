import { Field } from "@/components/common/form-generator/Field";

export interface FormProps {
  id: string;
  inputType: string;
  placeholder: string;
  name: string;
  type: string;
}

export const COMMUNITY_FORM: Field[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Community Name",
    name: "name",
    type: "text",
  },
  {
    id: "2",
    inputType: "textarea",
    placeholder: "Community description",
    name: "description",
    type: "text",
  },
];
