import DynamicImport from "@/components/DynamicImport/DynamicImport";
import LoginForm from "@/components/forms/loginForm/LoginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "login page",
};

export default function LoginPage() {
  return (
    <div>
      <h1>Login to your account</h1>
      <DynamicImport components={['loginForm']} />
    </div>
  );
}
