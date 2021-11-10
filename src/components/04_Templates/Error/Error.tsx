import React from "react";

interface IerrorProps {
  error: string;
}

const Error = ({ error = "에러입니다." }: IerrorProps) => {
  return <div>Error</div>;
};

export default Error;
