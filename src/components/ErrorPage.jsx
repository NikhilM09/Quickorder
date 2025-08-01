import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  console.log("error", error);
  const { status, statusText } = error;

  return (
    <>
      <h1>Error : {status}</h1>
      <p>{statusText}</p>
    </>
  );
};

export default ErrorPage;
