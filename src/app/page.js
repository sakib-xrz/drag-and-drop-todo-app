"use client";

import { useState } from "react";
import Card from "@/components/Card";

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState([]);

    const handleDragStart = (event, todo) => {
        event.dataTransfer.setData("text/plain", todo);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, target) => {
        event.preventDefault();
        const todo = event.dataTransfer.getData("text/plain");

        if (target === "todos") {
            setTodos([...todos, todo]);
        } else if (target === "completed") {
            setCompleted([...completed, todo]);
        }
    };

    const handleRemoveTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="space-y-10 max-w-7xl mx-auto">
            <h1 className="text-center text-3xl text-teal-500 font-medium mt-10 underline">
                TODO APP
            </h1>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const form = event.target;
                    const todo = form.todo.value;
                    setTodos([...todos, todo]);
                    form.reset();
                }}
                className="flex gap-5 justify-center"
            >
                <input
                    type="text"
                    name="todo"
                    placeholder={"Reading next.js docs"}
                    className="border rounded-md p-2 border-teal-500 focus:outline-teal-500 w-6/12"
                />
                <button
                    type="submit"
                    className="bg-teal-600 text-white py-2 px-3 rounded-md"
                >
                    Add Todo
                </button>
            </form>
            <div className="grid grid-cols-2 gap-10">
                <div className="border border-teal-500">
                    <h2 className="text-center bg-teal-500 text-white text-xl font-medium py-2">
                        TODOS
                    </h2>
                    <div
                        className="h-80 overflow-y-scroll"
                        onDragOver={handleDragOver}
                        onDrop={(event) => handleDrop(event, "todos")}
                    >
                        {todos.map((todo, index) => (
                            <div
                                key={index}
                                className="cursor-pointer"
                                draggable
                                onDragStart={(event) =>
                                    handleDragStart(event, todo)
                                }
                                onDragEnd={() => handleRemoveTodo(index)}
                            >
                                <Card>{todo}</Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border border-teal-500">
                    <h2 className="text-center bg-teal-500 text-white text-xl font-medium py-2">
                        COMPLETE
                    </h2>
                    <div
                        className="h-80 overflow-y-scroll"
                        onDragOver={handleDragOver}
                        onDrop={(event) => handleDrop(event, "completed")}
                    >
                        {completed.map((todo, index) => (
                            <Card key={index}>{todo}</Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
