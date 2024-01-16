"use server";

import { message } from "antd";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createSpecialization = async (data: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/specializations/create-specialization`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    }
  );
  const { data: specializationData, success } = await res.json();
  revalidateTag("all-specializations");
  redirect(`/admins/specializations`);
};
