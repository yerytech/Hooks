import { todoReducer } from "../../08-useReducer/todoReducer";

describe('pruebas en el useReducer', () => {
    
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

    test('deberia regresar el esta inicial ', () => {
        
        const newState = todoReducer(initialState, {});
        // console.log(newState);
        expect(newState).toBe(initialState);
       

    });


    test('should add todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuew TODO #2',
                done:false
            }
        }
        const newState = todoReducer(initialState, action);
         expect(newState.length).toBe(2);
         expect(newState).toContain(action.payload);
    });


    test('should delete Todo', () => {
         const action = {
           type: "[TODO] Remove Todo",
           payload: 1
         };
        const newState = todoReducer(initialState, action);
         expect(newState.length).toBe(0);
        
    });
    
    
    
    test('should realice togle del todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };
          const newState = todoReducer(initialState, action);
          expect(newState[0].done).toBe(true);
    

    });

  
    
    
    
    
})