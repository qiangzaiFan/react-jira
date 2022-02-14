import React, { FormEvent } from "react";

export const loginScreen = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名：</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label htmlFor="password">密码：</label>
        <input type="text" name="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
