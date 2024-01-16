import PublicCard from "@/components/view/Public/PublicCard";
import Link from "next/link";

const AvailableServicePublic = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/available-services`, {
    // cache: "no-cache",
    next: {
      revalidate: 24 * 60 * 60, // time based revalidation
      //on demand revalidation
      tags: ["available-services"],
    },
  });
  const { data } = await res.json();

  return (
    <div>
      {data.length !== 0 ? (
        <>
          {data.map((availableService: any) => {
            return (
              <Link
                key={data?.id}
                href={`/available-services/${availableService?.id}`}
              >
                <PublicCard title={availableService.service.name} hoverable>
                  {availableService.slotDate}
                </PublicCard>
              </Link>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default AvailableServicePublic;
