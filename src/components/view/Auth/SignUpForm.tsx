"use client";

import loginImage from "@/assets/login-form.png";
import SignUpFormFirst from "@/components/SignUpFormStepper/SignUpFormFirst";
import SignUpFormSecond from "@/components/SignUpFormStepper/SignUpFormSecond";
import StepperForm from "@/components/StepperForm/StepperForm";
import { createPatient } from "@/services/patients/create-patient";
import Image from "next/image";

const steps = [
  {
    title: "Basic Info First Step",
    content: <SignUpFormFirst />,
  },
  {
    title: "Basic Info Last Step",
    content: <SignUpFormSecond />,
  },
];

const SignUpForm = () => {
  const handleSignUpForm = async (data: any) => {
    try {
      await createPatient(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid items-center grid-cols-6 md:grid-cols-5">
      <div className="col-span-3 flex justify-center">
        <Image src={loginImage} width={800} alt="login-image" />
      </div>
      <div className="md:col-span-2 w-3/5 col-span-3">
        <StepperForm
          submitHandler={(value) => handleSignUpForm(value)}
          persistKey="sign-up-form"
          steps={steps}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
