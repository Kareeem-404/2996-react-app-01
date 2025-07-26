import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const response = await fetch("https://dummyjson.com/todos");
const data = await response.json();
const { todos } = data;
// console.log(data);

export default function Todos() {
  const { check, setCheck } = useState(0);

  return (
    <div className="flex flex-col gap-5 py-10 px-40 rounded-b-full">
      <div className="bg-gray-400 rounded-full text-white">
        <input
          type="text"
          className="border-none text-xl w-[90%] h-[100%] by-2 ps-3 focus:outline-none"
          placeholder="Todo..."
        />
        <button className="w-[10%] rounded-e-full bg-blue-500 py-2 h-[100%]">
          ADD
        </button>
      </div>
      <div className="bg-gray-400 rounded-3xl p-5">
        {todos.map((todo) => (
          <div key={todo.id} className="flex flex-col text-xl text-white">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  onClick={(e) => {
                    check.target.checked;
                  }}
                />
                <p>{todo.todo}</p>
              </div>
              <div className="pe-5 cursor-pointer">
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="#b80000"
                >
                  <path d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z" />
                </svg>
              </div>
            </div>
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
