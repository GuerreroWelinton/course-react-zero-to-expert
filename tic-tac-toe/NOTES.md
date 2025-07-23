# NOTAS

- `npm create vite@latest name-project`
- Los componentes de React deben devolver un solo elemento JSX y no múltiples elementos JSX adyacentes.
- Se pueden utilizar Fragments (<> y </>) para envolver múltiples elementos JSX adyacentes.
- También se pueden poner los Fragments así:
  ```
  <React.Fragment></React.Fragment>
  ```
- Los componentes deben empezar con una letra mayúscula.
- `useState` es una función especial que se usa para mantener estados.

- En la siguiente línea `value` almacena el valor, `setValue` es la función que se puede usar para cambiar el valor y `initialValue` el valor inicial para esta variable de estado.

  ```javascript
  const [value, setValue] = useState(initialValue);
  ```

- En JS se admiten `closures` que es la combinación de una función agrupada (dentro de otra).

- Cuando se hace uso de un componente y se le pasa como prop la ejecución de una función que altere su estado, esto genera un bucle infinito porque ese cambio de estado hace que se renderice de nuevo el componente, ejemplo:

  ```javascript
  function handleClick(newValue) {
    setValue(newValue)
  }

  <Component value={value} onClick={handleClick(0)}>
  ```

- Esto se soluciona usando funciones flechas `() =>` para que cuando recién se haga clic se ejecute la función depues de la "flecha"

  ```javascript
  <Component value={value} onClick={()=>handleClick(0)}>
  ```

- En react, es convencional usar nombres `on[Event]` para props que representan eventos y `handle[Event]` para las definiciones de funciones controlan eventos.

- Evitar la mutación directa de los datos permite mantener intactas las versiones previas de los datos y reutilizarlas más adelante.

- De forma predeterminada, todos los componentes secundarios se vuelven a renderizar automáticamente cuando se cambia el estado de un componente principal. Esto incluye incluso en los componentes secundarios que no se vieron afectados por el cambio.

- Aunque el usuario no nota la renderización en sí misma (¡no debes tratar de evitarla de forma activa!), es posible que desees omitir la renderización de una parte del árbol que claramente no se vio afectada por razones de rendimiento. La inmutabilidad hace que sea muy barato para los componentes comparar si sus datos han cambiado o no.

- `key` es una propiedad especial y reservada en React que se usa como identificador de cada componente para decidir que componentes actualizar.

- Se recomienda asignar `keys` adecuadas cada vez que se cran listas dinámicas.

- Si no se especifica ninguna `key`, React informará un error y utilizará el índice de matriz como `key` de forma predeterminada. El uso del índice de la matriz como `key` es problemático cuando se intenta reordenar los elementos de una lista o al insertar/eliminar elementos de la lista. Pasar explícitamente `key={i}` silencia el error pero tiene los mismos problemas que los índices de matriz y no se recomienda en la mayoría de los casos.

Las `keys` no necesitan ser globalmente únicas; solo necesitan ser únicas entre los componentes y sus hermanos.
