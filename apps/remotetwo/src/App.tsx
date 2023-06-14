import React from "react";
import { AppShell } from "ui";
// import Button from "./remotetwo";
//@ts-ignore
import Button from "remoteone/Button";

function App() {
  return (
    <AppShell
      title="Service Remote Two"
      routes={[
        {
          path: "/",
          element: () => (
            <div>
              <h1>Remote Two Host </h1>
              <Button />
            </div>
          ),
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
