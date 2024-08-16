import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from "../../09-useContext/LoginPage";

describe('prueba en <loginpage/>', () => {
    
    test('debe de mostar el componente sin el usuario ', () => {
      
       
      
        render(
        <UserContext.Provider value={{ user: null }}>
          <LoginPage/>
        </UserContext.Provider>
      );
      const preTag = screen.getByLabelText("pre");
      expect(preTag.innerHTML).toBe("null");
    });
    
    test('debe de llamar el setUser al Hacer click en el Buttom ', () => {
       const setUserMock = jest.fn();
        render(
         <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
           <LoginPage />
         </UserContext.Provider>
       );
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith({
          email: "juan@google.com",
          id: 123,
          name: "Juan",
        });
    });
    
    
    
    
   
})