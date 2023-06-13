import React from "react";
import { AppShell } from "ui";

function App() {
  return (
    <AppShell
      title="Service Host"
      routes={[
        {
          path: "/",
          element: () => <div>Host</div>,
        },
        {
          path: "/remote",
          element: () => <div>Other Remote</div>,
        },
      ]}
      navLinks={[
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Remote",
          path: "/remote",
        },
      ]}
    />
  );
}

export default App;
