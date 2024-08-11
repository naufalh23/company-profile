import Image from "next/image";
import { splitStr } from "../helper/splitStr";
import Link from "next/link";

interface ICardBlog {
  title: string;
  image: string;
  description: string;
  slug: string;
}

export const CardBlog: React.FC<ICardBlog> = ({
  title,
  image,
  description,
  slug,
}) => {
  return (
    <div className="bg-bgcard border border-bgfoot rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 my-4">
      <Image
        className="rounded-t-lg h-[200px] w-full "
        src={`https:${image}`}
        alt={title}
        width={500}
        height={500}
      />
      <div className="p-4">
        <h5 className="mb-2 text-md font-bold tracking-tight text-text2 dark:text-white">
          {splitStr(title, 50)}
        </h5>
        <div className="flex items-center my-5">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text2 truncate dark:text-white">
              {splitStr(description, 50)}
            </p>
          </div>
        </div>
        <Link
          href={"/product"}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center shadow-md text-text4 bg-butt rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          More ...
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
