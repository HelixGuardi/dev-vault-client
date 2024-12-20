# DevVault Project

[![App Logo](https://via.placeholder.com/150)](https://devvaultproject.netlify.app)  
**[¡Mira la App!](https://devvaultproject.netlify.app)**

---

## Description

DevVault es una aplicación para gestionar tecnologías y sus respectivos flipCards, facilitando el aprendizaje y el seguimiento de información técnica de forma organizada.  

- **[Repositorio del Cliente](https://github.com/HelixGuardi/dev-vault-client)**  
- **[Repositorio del Servidor](https://github.com/HelixGuardi/dev-vault-server)**

---

## Technologies, Libraries & APIs used

- HTML
- CSS
- JavaScript
- React
- Axios
- React Router
- JSON Server
- Bootstrap

---

## Backlog Functionalities

Estas son algunas de las funcionalidades que planeo añadir o mejorar en el futuro:

- Crear, editar, borrar y actualizar nuevas tecnologías.
- Añadir flipCards en las nuevas tecnologías creadas.
- Implementar una confirmación antes de borrar cualquier elemento (tecnologías o flipCards).
- Mejorar los estilos visuales y optimizar el rendimiento de la aplicación para hacerla más ligera.

---

## Client Structure

### User Stories

1. **Como usuario**, quiero poder ver todas las tecnologías disponibles en la aplicación.  
2. **Como usuario**, quiero poder buscar información detallada sobre una tecnología específica y sus flipCards asociados.  
3. **Como usuario**, quiero gestionar flipCards (crear, editar, borrar).  
4. **Como usuario**, quiero que se me solicite confirmación antes de borrar cualquier elemento.  
5. **Como usuario**, quiero que la aplicación sea ligera y visualmente atractiva.

---

### Client Routes

| **Método** | **Endpoint**                                  | **Respuesta (200)**                 | **Acción**                                                                 |
|------------|-----------------------------------------------|-------------------------------------|-----------------------------------------------------------------------------|
| GET        | `/technologies`                               | `[technologies]`                    | Obtiene la lista de todas las tecnologías disponibles.                     |
| GET        | `/flipCards`                                  | `[flipCards]`                       | Obtiene todos los flipCards.                                               |
| GET        | `/flipCards/:flipCardId`                      | `{ flipCard }`                      | Obtiene un flipCard específico.                                            |
| POST       | `/flipCards`                                  | `{ nuevo flipCard }`                | Crea un nuevo flipCard.                                                    |
| PUT        | `/flipCards/:flipCardId`                      | `{ actualiza flipCard }`            | Actualiza un flipCard específico, mediante su ID.                          |
| PATCH      | `/flipCards/:flipCardId`                      | `{ actualiza propiedad }`           | Actualiza una propiedad específica de un flipCard existente, mediante ID.  |
| DELETE     | `/flipCards/:flipCardId`                      | `{}`                                | Elimina un flipCard específico, mediante ID.                               |
| GET        | `/technologies/:technologyId?_embed=flipCards`| `{ tecnología, [flipCards] }`       | Obtiene una tecnología específica y todos sus flipCards correspondientes.  |
| GET        | `/flipCards/:flipCardId?_expand=technology`   | `{ flipCard, tecnología }`          | Obtiene un flipCard específico y la tecnología correspondiente.            |
| GET        | `/technologies/category/:category`            | `[technologies]`                    | Busca tecnologías filtradas por categoría.                                 |

---

### React Router Routes (React App)

| **Route**                 | **Descripción**                              |
|---------------------------|----------------------------------------------|
| `/`                       | Página principal que muestra todas las tecnologías disponibles. |
| `/technologies/:id`       | Página con detalles de una tecnología específica. |
| `/flipCards/:id`          | Página con detalles de un flipCard específico. |
| `/new`                    | Página para añadir una nueva tecnología o flipCard. |
| `/edit/:id`               | Página para editar una tecnología o flipCard existente. |

---

## Other Components

- **Navbar:** Barra de navegación para moverse entre las distintas páginas.  
- **Footer:** Pie de página con enlaces relevantes.  
- **Card Component:** Componente reutilizable para mostrar tecnologías y flipCards en tarjetas visualmente atractivas.

---

## Links

- [Deploy de la App](https://devvaultproject.netlify.app)
- [Repositorio del Cliente](https://github.com/HelixGuardi/dev-vault-client)
- [Repositorio del Servidor](https://github.com/HelixGuardi/dev-vault-server)
<!-- - [Documentación de la API](https://github.com/usuario/devvault-api-docs) -->
