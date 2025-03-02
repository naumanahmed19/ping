import { Field } from "@/components/common/form-generator/Field";
import { Separator } from "@/components/ui/separator";
import { Fingerprint, Globe, GlobeLock } from "lucide-react";

export const STEP1_FIELDS: Field[] = [
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
    beforeFormField: "<hr />",
  },

  {
    id: "4",
    label: "Topics",
    name: "topics",
    description:
      "Add up to 3 topics to help interested users to find your community.",
    inputType: "topics-select",
  },
];

export const STEP2_FIELDS: Field[] = [
  {
    id: "1",
    placeholder: "Community Icon",
    name: "icon_img",
    inputType: "upload-tile",
  },
  {
    id: "2",
    placeholder: "Banner Image",
    name: "banner_img",
    inputType: "upload-tile",
  },
];

export const STEP3_FIELDS: Field[] = [
  {
    id: "1",
    label: "Topics",
    name: "topics",
    description:
      "Add up to 3 topics to help interested users to find your community.",
    inputType: "topics-select",
  },
];

export const STEP4_FIELDS: Field[] = [
  {
    id: "1",
    placeholder: "",
    name: "privacy",
    inputType: "radio-tile",
    options: [
      {
        value: "public",
        label: "Public",
        description: "Anyone can view and contribute",
        icon: Globe,
      },
      {
        value: "restricted",
        label: "Restricted",
        description: "Anyone can view, but only approved users can contribute",
        icon: Fingerprint,
      },
      {
        value: "private",
        label: "Private",
        description: "Only approved users can view and contribute",
        icon: GlobeLock,
      },
    ],
  },
  {
    id: "3",
    name: "mature",
    inputType: "switch-tile",
    tile: {
      style: "trailing-input",
      label: "Mature (18+)",
      description: "Users must be over 18 to view and contribute",
    },
    beforeFormField: <Separator className="my-4" />,
    afterFormField: <Separator className="my-4" />,
  },
  {
    id: "4",
    name: "terms",
    inputType: "checkbox-tile",
    tile: {
      style: "leading-input",
      label: "Accept terms and conditions",
      description: "You agree to our Terms of Service and Privacy Policy.",
    },
  },
];
