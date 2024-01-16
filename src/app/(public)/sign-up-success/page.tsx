import Link from "next/link";
import React from "react";

const SignUpSuccess = () => {
  return (
    <div className="h-[80vh] text-2xl flex justify-center items-center">
      <div>
        <p className="mb-0">Congratulations... you signed up successfully.</p>
        <p className="py-1">now you can log in with your credentials</p>
        <div className="mt-3">
          <Link className="text-xl" href="/login">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpSuccess;
