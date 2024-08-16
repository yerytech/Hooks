
import { renderHook } from "@testing-library/react"
import { any } from "prop-types";
import { act } from "react";
import { useForm } from "../../hooks/useForm"

describe('pruebas en el useform', () => { 

const initialForm = {
  name: "yery",
  email: "yerytech@gmail.com",
};
 const newValue = "pedro";
  test('debe regresar los valores por  defecto', () => {
    
    const { result } = renderHook(() => useForm(initialForm));
   
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })

  });


  test('debe de retornar el valor del inputchange', () => {
    const { result } = renderHook(() => useForm());
    const { onInputChange, onResetForm } = result.current;
   
    act(() => {
     onInputChange({target:{name:'name',value:newValue}})
    });
      // console.log(result.current);
    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
    

  });  

    test("debe de retornar el valor de inicio en el form", () => {
      const { result } = renderHook(() => useForm(initialForm));
      const { onInputChange, onResetForm } = result.current;

      act(() => {
        onInputChange({ target: { name: "name", value: newValue } });
        onResetForm();
      });
      // console.log(result);
      expect(result.current.name).toBe(initialForm.name);
      expect(result.current.formState.name).toBe(initialForm.name);
    });  


 })