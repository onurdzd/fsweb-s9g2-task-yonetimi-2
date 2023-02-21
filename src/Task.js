import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  return (
    <div className="bg-white p-6 rounded-3xl leading-6 mt-4 shadow-lg">
      <h3>{taskObj.title}</h3>
      <div className="text-sm py-1 ">
        son teslim:{" "}
        <span
          className={
            differenceInDays(new Date(taskObj.deadline), new Date()) < 0
              ? "bg-red-500"
              : differenceInDays(new Date(taskObj.deadline), new Date()) < 3
              ? "bg-ozelRenk"
              : "bg-green-500"
          }
        >
          {new Date() > new Date(taskObj.deadline)
            ? formatDistanceToNow(new Date(taskObj.deadline), {
                addSuffix: true,
                locale: tr,
              }) + " bitti!"
            : formatDistanceToNow(new Date(taskObj.deadline), {
                addSuffix: true,
                locale: tr,
              }) + " bitiyor!"}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block px-4 py-1 text-base border-2 border-gray-800 mr-1 mb-1 rounded-xl "
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      <div className="flex justify-end">
        {onComplete && (
          <button
            className="bg-orange-300 font-normal p-2 rounded-md "
            onClick={() => onComplete(taskObj.id)}
          >
            Tamamlandı
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
