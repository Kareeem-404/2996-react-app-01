import Btn from "./Btn";

export default function Card({ title, description, button1, button2, button1_color, button2_color }) {
  let btn1_style;
  let btn2_style;

  switch (button1_color) {
    case "red":
      btn1_style = "bg-red-500 ";
      break;
    case "green":
      btn1_style = "bg-green-500";
      break;
    case "sky":
      btn1_style = "bg-sky-500";
      break;
    default:
      btn1_style = "bg-gray-500";
  }

  switch (button2_color) {
    case "red":
      btn2_style = "bg-red-500";
      break;
    case "green":
      btn2_style = "bg-green-500";
      break;
    case "sky":
      btn2_style = "bg-sky-500";
      break;
    default:
      btn2_style = "bg-gray-500";
  }

  return (
    <div className="flex px-5 flex-col justify-between  rounded-lg text-gray-700 dark:text-gray-200  my-4 py-4 bg-gray-400 dark:bg-gray-600">
      <div className="w-75 ">
        <h1 className="text-3xl mb-4 font-medium">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex gap-4 mt-3 text-white">

        <Btn color={btn1_style}>{button1}</Btn>
        <Btn size="lg" color={btn2_style}>{button2}</Btn>
      </div>
    </div>
  );
}
