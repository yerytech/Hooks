import { render,screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples";

describe('prueba en multiple customhooks', () => { 

    test('deberia mostar  el componente por defecto', () => {
      
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole("button", { name: "Next quote" });
        expect(nextButton.disable).toBeFalsy();
        // screen.debug();
    

    });



 })