import  { renderHook } from "@testing-library/react"
const { act } = require("react");
const { useCounter } = require("../../hooks/useCounter");

describe('Prueba en el use counter', () => {
       
    test('retorna los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });
      
    test('deberia generar el counter con el valor que le envie ', () => {
        
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
        
    });

    test('debe incrementar el contador ', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment, } = result.current;
        act(() => {
            // increment();
            increment(2);
        });
          
        expect(result.current.counter).toBe(102);
    });
    test('debe decrementar el contador ', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement, } = result.current;
        act(() => {
            decrement();
            decrement(2);
        });
          
        expect(result.current.counter).toBe(97);
    });
    test('debe resetear el contador ', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, reset,increment} = result.current;
        act(() => {
            increment(5);
            reset();
        });
          
        expect(result.current.counter).toBe(100);
    });

})