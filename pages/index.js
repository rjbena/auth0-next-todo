import { useEffect, useContext } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import { table, minifyRecords } from "./api/utils/Airtable";
import { TodosContext } from "../contexts/TodosContext";
export default function Home({ initialTodos }) {
  const { todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  return (
    <div>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>Todo App</main>
      <ul>
        {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const todos = await table.select({}).firstPage();
    return {
      props: {
        initialTodos: minifyRecords(todos),
      },
    };
  } catch (error) {
    console.error(err);
    return {
      props: {
        err: "Something went wrong",
      },
    };
  }
}
