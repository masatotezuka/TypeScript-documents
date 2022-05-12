"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res
        .status(200)
        .json({ message: "TODOを作成しました。", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした");
    }
    TODOS[todoIndex] = new todos_1.Todo(todoId, updateText);
    res.json({ message: "更新が完了しました", updateTodos: TODOS });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "削除完了", todo: TODOS });
};
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todos.js.map