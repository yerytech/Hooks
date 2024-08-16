const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../08-useReducer/TodoApp");
const { useTodos } = require("../../hooks/useTodos");
  jest.mock("../../hooks/useTodos");
describe('Prueba en <TodoApp> ', () => {
  useTodos.mockReturnValue({
    todos: [{
      id: 1, description: "Todo 1", done: false
    },
    {  id: 2, description: "Todo 2",done:true,}
    ],
    todosCount:2,
    pendingTodosCount:1,
    handleDeleteTodo:jest.fn(),
    handleToggleTodo:jest.fn(),
    handleNewTodo:jest.fn()
  });

    test('debe de mostar el componente correcta mente', () => {
       
      render(<TodoApp />)
      expect(screen.getAllByText("Todo 1")).toBeTruthy();
      expect(screen.getByRole("textbox")).toBeTruthy();
     

    });
   












   
});