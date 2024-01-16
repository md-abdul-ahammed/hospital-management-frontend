import FormTextArea from "@/components/Form/FormTextArea";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormSelect from "@/components/Form/FormSelect";
import FormPhoneInput from "@/components/Form/FormPhoneInput";

const SignUpFormSecond = () => {
  return (
    <div>
      <div className="my-4">
        <FormDatePicker
          label="Date Of Birth"
          placeholder="Select Your Date of Birth"
          name="medicalProfile.dob"
          size="large"
        />
      </div>
      <div className="mb-4">
        <FormSelect
          label="Gender"
          name="medicalProfile.gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
          placeholder="Please Select Your Gender"
          size="large"
        />
      </div>
      <div className="mb-4">
        <FormTextArea
          label="Address"
          size="large"
          placeholder="Please Enter Your Address"
          name="medicalProfile.address"
        />
      </div>
      <div className="mb-4">
        <FormPhoneInput
          size="large"
          name="medicalProfile.emergencyContact"
          label="Emergency Contact Number"
        />
      </div>
    </div>
  );
};

export default SignUpFormSecond;
