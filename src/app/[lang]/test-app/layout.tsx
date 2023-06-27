import React, { Fragment } from "react";

export default function Layout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <div className="text-center py-1 text-white bg-green-700">
        Test app layout
      </div>
      <div>{children}</div>
    </Fragment>
  );
}
