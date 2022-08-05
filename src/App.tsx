import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Disclosure } from "@headlessui/react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Disclosure>
      <Disclosure.Button onClick={() => setOpen((prev) => !prev)}>
        Missing <code>aria-controls</code> attribute.
      </Disclosure.Button>
      <div style={open ? { display: "block" } : { display: "none" }}>
        <Disclosure.Panel static>Content</Disclosure.Panel>
      </div>
    </Disclosure>
  );
}

export default App;
