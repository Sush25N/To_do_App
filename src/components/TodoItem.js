import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodoText } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTodoText({ id: todo.id, text: editedText }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(todo.text);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-success" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
            </div>
          </div>
          <p className={`form-control ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
          </p>
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleEdit}>
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
