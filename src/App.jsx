import React from "react";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { PwInput } from "./components/pwInput";

function App() {
  return (
    <div style={{ padding: "40px", maxWidth: "300px", margin: "0 auto" }}>
      <h1>컴포넌트 프리뷰</h1>
      <Button /> {}
      <Input />
      <PwInput />
      {}
    </div>
  );
}

export default App;
