import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/todoSlice';
import TodoList from './components/TodoList';
import './Home.css'

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
        className="btn btn-primary add-todo"
        onClick={() => addNewTodo('New Todo')}
      >
        Add Todo
      </button>
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      <div className="counts">
        <p className="text-success-box">Completed: {completedCount}</p>
        <p className="text-danger-box">Uncompleted: {uncompletedCount}</p>
        <p className='total-box-count'>Total: {totalCount}</p>
      </div>
    </div>
  );
};

export default Home;

