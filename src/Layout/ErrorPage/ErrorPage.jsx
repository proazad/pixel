import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto font-roboto">
      <div className="h-screen gap-5 flex flex-col justify-center items-center">
        <h2 className="text-7xl font-bold text-[#ff0052]">Opps!</h2>
        <h3 className="text-5xl font-bold">404</h3>
        <h3 className="text-3xl font-bold">not found</h3>
        <h4 className="text-2xl font-bold text-blue-600">
          <Link to="/">go back home</Link>
        </h4>
      </div>
    </div>
  );
};

export default ErrorPage;
