import React from "react";

const SingleAvailableServicePublic = async ({
  params,
}: {
  params: {
    availableServiceId: string;
  };
}) => {
  const { availableServiceId } = params;

  const res = await fetch(
    `http://localhost:5000/api/v1/available-services/${availableServiceId}`
  );

  const { data } = await res.json();

  return <div>I am done{data.service.name}</div>;
};

export default SingleAvailableServicePublic;
