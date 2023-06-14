import React from "react";
import { AppShell } from "ui";
//@ts-ignore

import Card from "remotetwo/Card";

function App() {
  return (
    <AppShell
      title="Service Host"
      routes={[
        {
          path: "/",
          element: () => (
            <div>
              <h1>Host</h1>
              <div
                style={{
                  width: "500px",
                }}
              >
                {" "}
                <Card />
              </div>
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
