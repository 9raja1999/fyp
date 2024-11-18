import { Metadata } from "next";
import React from "react";
import DynamicImport from "@/components/DynamicImport/DynamicImport";

export const metaDeta: Metadata = {
  title: "sign up page",
};

export default function SignUpPage() {
  return (
    <div>
      <h1>Register your self</h1>
      
      <DynamicImport components={['signUpForm']} />
    </div>
  );
}
