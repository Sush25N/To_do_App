import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/todoSlice';
import TodoList from './components/TodoList';

const Home = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addNewTodo = (text) => {
    dispatch(addTodo({ id: Date.now(), text, completed: false }));
  };

  const handleToggle = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const uncompletedCount = todos.length - completedCount;
  const totalCount = todos.length;

  return (
    <div className="home">
      <h1 className="text-center">Todo List</h1>
      <button
        className="btn btn-primary"
        onClick={() => addNewTodo('New Todo')}
      >
        Add Todo
      </button>
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      <div className="counts">
        <p className="text-success">Completed: {completedCount}</p>
        <p className="text-danger">Uncompleted: {uncompletedCount}</p>
        <p>Total: {totalCount}</p>
      </div>
    </div>
  );
};

export default Home;

