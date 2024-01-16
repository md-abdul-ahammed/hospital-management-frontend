"use client";

import FormInput from "@/components/Form/FormInput";
import { useState } from "react";
import FormPhoneInput from "@/components/Form/FormPhoneInput";

const SignUpFormFirst = () => {
  const [phone, setPhone] = useState("+880");
  return (
    <div>
      <div className="my-4">
        <FormInput
          label="Full Name"
          placeholder="Enter Your Full Name"
          name="fullName"
          size="large"
        />
      </div>
      <div className="mb-4">
        <FormInput
          type="email"
          placeholder="Enter Your Email"
          label="Your Email"
          name="email"
          size="large"
        />
      </div>
      <div className="mb-4">
        <FormPhoneInput size="large" name="phoneNumber" label="Phone Number" />
      </div>
      <div className="mb-4">
        <FormInput
          type="password"
          placeholder="Enter Your Password"
          label="Password"
          name="password"
          size="large"
        />
      </div>
    </div>
  );
};

export default SignUpFormFirst;
