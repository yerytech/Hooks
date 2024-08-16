import { render, screen } from "@testing-library/react";
import { MainApp } from "../../09-useContext/MainApp";
import { MemoryRouter } from "react-router";

describe('Pruebas en el <MainApp/>', () => { 

    test('Debe de mostrar el HomePage', () => {
      
        render(
          <MemoryRouter>
            <MainApp />
          </MemoryRouter>
        );
        expect(screen.getByText("HomePage")).toBeTruthy();



    });
    test('Debe de mostrar el HomePage', () => {
      
        render(
          <MemoryRouter initialEntries={["/login"]}>
            <MainApp />
          </MemoryRouter>
        );
        expect(screen.getByText("LoginPage")).toBeTruthy();



    });
    



 });