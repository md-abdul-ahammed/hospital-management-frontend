"use client";
import Form from "@/components/Form/Form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormInput from "@/components/Form/FormInput";
import FormSelect from "@/components/Form/FormSelect";
import UploadImage from "@/components/ui/UploadImage/UploadImage";
import { genderOptions } from "@/constants/global";
import { Button } from "antd";
import React from "react";

const AdminDashboard = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Form submitHandler={onSubmit}>
        <div className="grid md:grid-cols-3 gap-4 2xl:grid-cols-4">
          <div>
            <FormInput name="name" label="Name" />
          </div>

          <div>
            <FormSelect name="gender" label="Gender" options={genderOptions} />
          </div>
          <div>
            <FormDatePicker name="time" label="Available Time" />
          </div>
          <div>
            <UploadImage />
          </div>
        </div>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AdminDashboard;
