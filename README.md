# prueba técnica

Está dentro de una estructura de carpetas preparada para poder funcionar, los archivos editables se encuentran dentro de la carpeta `web/`: son los ficheros de nuestra página web, como HTML, SCSS, JS... para el front y dentro de la carpeta `src/`: los archivos de gestión de la parte de backend

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/)

### Cómo arrancar el backend

En la raíz del proyecto:

1. Ejecutar `npm install`.
1. Ejecutar `npm start` o `npm run dev`.

El backend se arrancará en http://localhost:4000

### Cómo ejecutar el frontend

En la raíz del proyecto:

1. Ejecutar `cd web`.
1. Ejecutar `npm install`.
1. Ejecutar `npm start` o `npm run dev`.
1. Abrir la página http://localhost:3000

### El proyecto se pide:

You have to build a Full-Stack web app to calc all numeric params in a list. User will be able to see all previous queries too.

#### El proyecto se pide:Requirements:

An endpoint /calc that receives an undetermined number of arguments and returns the sum of those arguments that are numerical (you could receive different types of data).
A second endpoint /history that returns all previous calls to /calc.
A form view to add several values (one per field, no limit), send them to /calc endpoint and, then, show the result.
A list view with all previous queries.

#### We will consider the following aspects in your code:

- Files and folders structure
- Component size
- Testing
- Error handling
- Logic coupling

#### Additional aspects we will consider:

- Good-looking interface
- Use local storage or Redux to store the last query between sessions
- Use Error Boundaries
- Use of Typescript
- Use of environment variables

#### In case of using React:

- Don't use classes
- Use react hooks / custom hooks
- Use react redux

#### Indications:

- Create a public repository (Github, Gitlab...) and share it with us.
- Try to commit small changes frequently. We want to see how you build your code step by step.
- Let us know when you are done, of course ;-)
