"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Empty } from "antd";

const imports = {
  header: dynamic(() => import("@/components/Header/Header"), { ssr: false }),
  footer: dynamic(() => import("@/components/Footer/Footer"), { ssr: false }),
  loginForm: dynamic(() => import("@/components/forms/loginForm/LoginForm"), {
    ssr: false,
  }),
  signUpForm: dynamic(
    () => import("@/components/forms/SignupForm/SignupForm"),
    { ssr: false }
  ),
  tagLine: dynamic(() => import("@/components/TagLine/TagLink"), {
    ssr: false,
  }),
  jobCards: dynamic(() => import("@/components/JobCards/JobCards"), {
    ssr: false,
  }),
  banner: dynamic(() => import("@/components/Banner/Banner"), {
    ssr: false,
  }),
};

interface IDynamicImport {
  components: string[];
}

export default function DynamicImport({ components }: IDynamicImport) {
  return (
    <>
      {components.map((cName) => {
        const Component = imports[cName as keyof typeof imports]; // Get the dynamic component

        if (Component) {
          return <Component key={cName} />; // Render the component
        } else {
          return (
            <Empty
              key={cName}
              description={`No element found with the name "${cName}"`}
            />
          ); // Fallback if no component is found
        }
      })}
    </>
  );
}
