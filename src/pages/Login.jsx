import React from "react";
import { Input } from "../components/input";
import { PwInput } from "../components/pwInput";
import { Button } from "../components/button";
import "../css/login.css";

function Login() {
  return (
    <div className="login-root">
      <div className="login-card">
        <h1 className="login-title">로그인</h1>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <Input label="사용자 이름" placeholder="사용자 이름을 입력하세요" />
          <PwInput label="비밀번호" placeholder="비밀번호를 입력하세요" />
          <Button type="submit">로그인</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
