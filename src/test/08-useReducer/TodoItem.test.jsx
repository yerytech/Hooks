import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en el TodoItem', () => {
    
    const todo = {
        id: 1,
        description: 'Piedra del Alma', 
        done:false
    }
    const onDeleteTodoMock=jest.fn();
    const onToggleTodoMock=jest.fn();

  beforeEach(()=> jest.clearAllMocks());

    test('debe mostrar el todo pendiente completado', () => {
      
      render(<TodoItem todo={todo}
        onToggleTodo={onToggleTodoMock}
       onDeleteTodo={onDeleteTodoMock}/>)
      const liElement = screen.getByRole("listitem");
      
      expect(liElement.className).toBe(
        "list-group-item d-flex justify-content-between"
      );
       
      const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain("align-self-center");

    });
    
    test('debe mostrar el todo completado', () => {
         todo.done=true
      render(<TodoItem todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock} />);
    
       
      const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain("align-self-center");
        expect(spanElement.className).toContain(
          "text-decoration-line-through"
        );

    });
  
  test('el span debe llamar el togletodo cuando haga click', () => {
      render(
        <TodoItem
          todo={todo}
          onToggleTodo={onToggleTodoMock}
          onDeleteTodo={onDeleteTodoMock}
        />
      );
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

  });
  
      test("el span debe llamar el ondelete cuando haga click", () => {
        render(
          <TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
          />
        );
        const deleteButton = screen.getByRole("button");
        fireEvent.click(deleteButton);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
      });
  
 
    
    
})