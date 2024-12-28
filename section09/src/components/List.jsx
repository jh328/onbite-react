import "./List.css";
import TodoItem from "./Todoitem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const getFilterData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().inclues(search.toLowerCase)
    );
  };
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredTodos = getFilterData();

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력해주세요."
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};
export default List;