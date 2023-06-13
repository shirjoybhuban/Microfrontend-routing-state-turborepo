import React from "react";
import { AppShell } from "ui";

function App() {
  return (
    <AppShell
      title="Service Remote One"
      routes={[
        {
          path: "/",
          element: () => <div>Remote One Host</div>,
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
