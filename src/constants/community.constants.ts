export interface FormProps {
  id: string;
  inputType: string;
  placeholder: string;
  name: string;
  type: string;
}

export const COMMUNITY_FORM: FormProps[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Community Name",
    name: "name",
    type: "input",
  },
  {
    id: "2",
    inputType: "textarea",
    placeholder: "Community description",
    name: "description",
    type: "textarea",
  },
];
