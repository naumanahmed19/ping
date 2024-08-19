import { Container } from "@/components/base/container";
import { Metadata } from "next";
import StepperForm from "./community-form";

export const metadata: Metadata = {
  title: "Create a Community",
  description: "Example music app using the components.",
};
export default function Page(): JSX.Element {
  return (
    <Container>
      <div className=" w-[650px]">
        <div className="my-10">
          <h1 className="text-2xl font-bold ">Create a community</h1>
          <p>Tell us about your community</p>
        </div>

        <StepperForm />
      </div>
    </Container>
  );
}
