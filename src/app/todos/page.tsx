"use client";
import useSWR from "swr";
import React from "react";

type Todo = {
  id: number;
  name: string;
  isComplete: boolean;
};

function TodoIndexPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Todo[]>(
    "http://localhost:5088/api/todoitems",
    fetcher
  );

  if (error) return <div>{error.message}</div>;

  if (!data) return <div>Loading</div>;

  return (
    <>
      {data.map((x) => (
        <>
          <div key={x.id}>{x.name}</div>
          <div key={x.id}>{x.isComplete ? "済" : "未"}</div>
        </>
      ))}
    </>
  );
}

export default TodoIndexPage;
