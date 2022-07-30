import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const link = `/cardinfo/${data.subject}`;
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex">
      <div class="flex flex-col items-center pb-12 pt-5">
        <div className="">
          <img
            class="mb-3 relative top-[0px] w-[420px] h-[150px]  shadow-lg"
            src={data.image}
            alt="Bonnie image"
          />
        </div>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {data.subject}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          {data.course}
        </span>
        <div class="flex mt-4 space-x-3 lg:mt-6">
          <Link
            to={link}
            state={data}
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#6A91A0] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Materials
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
