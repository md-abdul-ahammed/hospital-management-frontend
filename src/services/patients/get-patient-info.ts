"use server";

import { jwtHelpers } from "@/helpers/jwtHelper";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";

export const getPatientInfo = async () => {
  const session: any = await getServerSession(authOptions);
  const verifiedToken: any = jwtHelpers.verifyToken(
    session?.accessToken,
    process.env.JWT_SECRET!
  );

  const res = await fetch(
    `http://localhost:5000/api/v1/patients/${verifiedToken?.id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );
  // const { data: patientData, success } = await res.json();
  const { data } = await res.json();

  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
