"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormTextArea from "@/components/Form/FormTextArea";
import { createSpecialization } from "@/services/specializations/create-specializations";
import { Button } from "antd";
import React from "react";

const CreateSpecializations = () => {
  const onSubmit = async (data: any) => {
    try {
      await createSpecialization({ ...data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[70%] flex justify-center items-center">
      <div className="w-[30%]">
        <Form submitHandler={onSubmit}>
          <FormInput label="Specialization Name" name="name" />
          <FormTextArea label="Description" name="description" />
          <Button className="mt-4" type="primary" htmlType="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateSpecializations;
