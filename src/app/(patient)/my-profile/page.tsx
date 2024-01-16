import { getPatientInfo } from "@/services/patients/get-patient-info";
import React from "react";

const PatientProfile = async () => {
  const patientProfile = await getPatientInfo();

  return (
    <div className="w-full h-[80%] flex justify-center items-center">
      <div className="w-[40%]">
        <div className="grid py-4 grid-cols-2 border border-solid border-slate-400">
          <div className="text-center font-semibold text-slate-700 text-lg">
            Name:
          </div>
          <div className="text-center border-l text-base border-t-0 border-r-0 border-b-0 border-solid border-slate-400">
            {patientProfile.fullName}
          </div>
          <div className="text-center font-semibold text-slate-700 text-lg pt-3">
            Email:
          </div>
          <div className="text-center border-l text-base pt-3 border-t-0 border-r-0 border-b-0 border-solid border-slate-400">
            {patientProfile.email}
          </div>
          <div className="text-center font-semibold text-slate-700 text-lg pt-3">
            Phone No:
          </div>
          <div className="text-center border-l text-base pt-3 border-t-0 border-r-0 border-b-0 border-solid border-slate-400">
            {patientProfile.phoneNumber}
          </div>
          <div className="text-center font-semibold text-slate-700 text-lg pt-3">
            Gender:
          </div>
          <div className="text-center border-l text-base pt-3 border-t-0 border-r-0 border-b-0 border-solid border-slate-400">
            {patientProfile.medicalProfile.gender}
          </div>
          <div className="text-center font-semibold text-slate-700 text-lg pt-3">
            DOB:
          </div>
          <div className="text-center border-l text-base pt-3 border-t-0 border-r-0 border-b-0 border-solid border-slate-400">
            {patientProfile.medicalProfile.dob}
          </div>
          <div className="text-center font-semibold text-slate-700 text-lg pt-3">
            Address:
          </div>
          <div className="text-center border-l text-base pt-3 border-t-0 border-r-0 border-b-0 border-solid border-slate-400">
            {patientProfile.medicalProfile.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
