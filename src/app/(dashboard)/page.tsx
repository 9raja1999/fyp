import DynamicImport from "@/components/DynamicImport/DynamicImport";
import { Metadata } from "next";
import React from "react";

export const metaData: Metadata = {
  title: "Job portal",
};

function Dashboard() {
  return (
    <div>
      <DynamicImport
        components={["header", "banner", "jobCards", "footer", "tagLine"]}
      />
    </div>
  );
}

export default Dashboard;
