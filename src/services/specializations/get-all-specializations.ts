"use server";

import { Specialization } from "@/interfaces/specialization.interface";

export const getAllSpecialization = async (): Promise<Specialization[]> => {
  const res = await fetch(`http://localhost:5000/api/v1/specializations`, {
    headers: {
      "Content-Type": "application/json",
    },
    // cache: "no-cache"
    next: {
      revalidate: 24 * 60 * 60,
      tags: ["all-specializations"],
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
