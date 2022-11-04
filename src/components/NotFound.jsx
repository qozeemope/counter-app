import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-[#00000020] h-screen">
      <h1 className="md:text-3xl pt-[20%] text-center">
        Oops! You seem to be lost.
      </h1>
      <p className="text-center">
        Go back to{" "}
        <Link
          to="/"
          className={
            "text-blue-500 hover:text-blue-900 active:text-blue-700 focus:text-blue-400"
          }
        >
          Home
        </Link>
      </p>
    </div>
  );
}
