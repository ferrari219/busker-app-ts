import React from "react";

interface IloaderProps {
  loading?: string;
}

const Loader = ({ loading = "로딩중" }: IloaderProps) => {
  return <div>Loader</div>;
};

export default Loader;
