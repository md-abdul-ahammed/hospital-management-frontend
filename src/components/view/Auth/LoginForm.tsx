"use client";

import loginImage from "@/assets/login-form.png";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { signInSchema } from "@/schemas/sign-in/sign-in-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

type formValus = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const onSubmit: SubmitHandler<formValus> = async (data) => {
    try {
      if (data.email && data.password) {
        const res = await signIn("doctors-portal-backend", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (res?.ok && !res.error) {
          router.refresh();
          router.push("/");
        }
      }
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
        <h1>Log In</h1>
        <div>
          <Form resolver={yupResolver(signInSchema)} submitHandler={onSubmit}>
            <div className="my-4">
              <FormInput
                type="email"
                label="Your Email"
                name="email"
                size="large"
              />
            </div>
            <div>
              <FormInput
                type="password"
                label="Your Password"
                name="password"
                size="large"
              />
            </div>
            <Button className="mt-4" type="primary" htmlType="submit">
              Log In
            </Button>
            <div className="mt-2">
              Don&apos;t have an account? <Link href="/sign-up">Sign Up</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
