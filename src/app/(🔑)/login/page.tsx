import GoogleAuthButton from "@/components/common/authjs/googe-auth-button";
import SignInForm from "@/components/forms/sign-in";

const SignInPage = () => {
  return (
    <>
      <SignInForm />

      <GoogleAuthButton />
    </>
  );
};

export default SignInPage;
