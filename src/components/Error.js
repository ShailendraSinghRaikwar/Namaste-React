import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps !! Something went wrong</h1>
      <h3>
        {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default Error;