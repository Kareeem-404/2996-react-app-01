import {
  faQuoteLeft,
  faHeart,
  faShareNodes,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const response = await fetch("https://dummyjson.com/quotes");
const data = await response.json();
const { quotes } = data;
// console.log(quotes);


function Quotes({ quote, variant = "default" }) {
  // Variant styles
  const variants = {
    default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
    elegant:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-gray-100 dark:border-gray-800",
    bold: "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-100 dark:border-indigo-800",
  };

  const textVariants = {
    default: "text-gray-800 dark:text-gray-200",
    elegant: "text-gray-700 dark:text-gray-300",
    bold: "text-indigo-900 dark:text-indigo-100",
    minimal: "text-gray-800 dark:text-gray-200",
  };

  return (
    <div className="flex flex-col gap-10 py-10 px-30">
      {quotes.map((quote) => (
        <div
          key={quote.id}
          className={`relative rounded-xl border shadow-sm p-6 ${variants["elegant"]} transition-all duration-300 hover:shadow-md`}
        >
          {/* Quote icon */}
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className={`absolute top-4 left-4 text-2xl opacity-10 ${textVariants[variant]}`}
          />

          {/* Quote content */}
          <div className="relative z-10">
            <blockquote
              className={`text-lg md:text-xl font-medium italic mb-4 ${textVariants[variant]}`}
            >
              "{quote.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={
                    quote.author.image ||
                    "https://randomuser.me/api/portraits/men/1.jpg"
                  }
                />
              </div>
              <div>
                <p className={`font-semibold ${textVariants[variant]}`}>
                  {quote.author}
                </p>
                <p
                  className={`text-sm ${
                    variant === "bold"
                      ? "text-indigo-700 dark:text-indigo-300"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {quote.author.title}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end mt-4 space-x-3">
            <button
              className={`p-2 rounded-full ${
                variant === "minimal"
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "bg-white dark:bg-gray-700 shadow-sm hover:shadow-md"
              }`}
              title="Like quote"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={`${
                  variant === "bold"
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              />
            </button>

            <button
              className={`p-2 rounded-full ${
                variant === "minimal"
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "bg-white dark:bg-gray-700 shadow-sm hover:shadow-md"
              }`}
              title="Save quote"
            >
              <FontAwesomeIcon
                icon={faBookmark}
                className={`${
                  variant === "bold"
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              />
            </button>

            <button
              className={`p-2 rounded-full ${
                variant === "minimal"
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "bg-white dark:bg-gray-700 shadow-sm hover:shadow-md"
              }`}
              title="Share quote"
            >
              <FontAwesomeIcon
                icon={faShareNodes}
                className={`${
                  variant === "bold"
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
