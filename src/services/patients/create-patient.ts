"use server";

import { message } from "antd";
import { redirect } from "next/navigation";

export const createPatient = async (data: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/patients/create-patient`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    }
  );
  const { data: patientData, success } = await res.json();
  if (success) {
    message.success("Successfully Signed Up");
    redirect(`/sign-up-success`);
  }
};
