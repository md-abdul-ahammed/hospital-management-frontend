import { Button, Card, Space } from "antd";
import Link from "next/link";
import React from "react";
import { getAllSpecialization } from "@/services/specializations/get-all-specializations";

const Specialization = async () => {
  const allSpecialization = await getAllSpecialization();

  return (
    <div>
      <Link href="specializations/create">
        <Button type="primary">Create Specialization</Button>
      </Link>

      <h1 className="mt-8 text-black">All Specializations</h1>
      {allSpecialization.length === 0 ? (
        `Data is not available Right Now`
      ) : (
        <div className="grid grid-cols-6 gap-4 mt-4">
          {allSpecialization.map((specialization: any) => (
            <Card
              key={specialization?.id}
              size="small"
              title={specialization.name}
            >
              <p>{specialization.description}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Specialization;
