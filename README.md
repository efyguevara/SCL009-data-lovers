# **Data Lovers**

## **POKEMON**


* 1-Inicio del Proyecto
* 2-Resumen del proyecto
* 3-Planificación
* 4-Los Datos
* 5-Historia de Usuario
* 6-Prototipos Baja y Alta Fidelidad
* 7-POKEDEX



***

# **1. Inicio del Proyecto**

## ¿Que es Pokemon?

Pokémon (ポケモン) es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial. Las ventas de videojuegos hasta el 1 de diciembre de 2006 habían alcanzado una cantidad de 312 millones de ejemplares (incluyendo la venta de la versión Pikachu de la consola Nintendo 64),logrando ocupar el segundo lugar de las sagas de videojuegos más vendidos de Nintendo.​ La franquicia celebró su décimo aniversario el 40 de febrero de 2019.

La saga de videojuegos es desarrollada por la compañía programadora de software japonesa Game Freak, con personajes creados por Satoshi Tajiri para la empresa de juguetes Creatures Inc., y a su vez distribuida por Nintendo. La misión en estos juegos es capturar y entrenar a los pokémon (criaturas cuya denominación da nombre al juego), que hasta la fecha alcanzan el número de 809. La posibilidad de intercambiarlos le hizo conseguir una popularidad que se plasmó en un éxito de ventas y la consiguiente aparición de una serie animada, películas y diverso merchandising como peluches, juguetes y cartas.

<img src = src/img/pokemon_ash.png >

***

## **2. Resumen del proyecto**

En este proyecto se nos encomendó la tarea de realizar en 4 semanas, una aplicacion para con un  
_conjunto (set) de datos_** que se adecúe a las necesidades que identifiquemos de nuestros usuarios.

***

## **3. Planificacion**

La planificación de nuestro sitio puedes encontrarla en el siguiente Link:

**Trello** https://trello.com/b/wikObV7B/planificacion-pokemon


## **4. Los Datos**

## Reconocer al usuario

Como primer paso se realizaron entrevistas google para la recoleccion de datos, nuestros posibles usuarios debian responder una serie de preguntas tomando en consideracion que juegan o jugaban pokemon y cuales eran sus necesidades al momento de hacerlo. 
Con esto se logro una primera impresion de que tipo de usuario era el que utilizaba pokemon.

Ver entrevistas en el siguiente link:
 https://docs.google.com/forms/d/1JhWBLF1ZkH0EHyGAQbcm7i9ldAXAvQkH9VIDXdPw85k/edit#responses

 Como complemento a lo anterior se realizaron entrevistas en vivo para conocer mas en profundidad sus respuestas sin utilizar alternativas que pudiesen influenciar al usuario.

 Con estas pudimos determinar a varios tipos de usuarios entre ellos uno de nivel mas experto que llevaba un largo tiempo familiarizado con la serie y jugando Pokemon GO y otro que conocia la serie desde la infancia, pero que se identificaba como principiante al momento de jugar. 

 Por lo anterior es que decidimos enfocarnos en el usuario principiante con las siguientes caracteristicas:

 * Jugadores de Pokemon GO, principiantes principalmente.
 * Hombres y mujeres de 15 a 32 años.
 * Que esperan utilizar la aplicacion mientras juegan para buscar pokemon´s que no recuerdan o conocen.

## **5-Criterios de Aceptacion e Historias de Usuario*

1- Yo como jugador quiero ver una lista de todos los pokemons para saber su nombre y tipo.

Criterios de aceptación:
- Imprimir los pokemon's en la pantalla principal, cada uno en un card.
- Que el card muestre la foto del pokemon, el nombre y el tipo.
- Todas las cards deben estar ordenadas por el Nº del pokemon.
- La pantalla debe estar identificada de acuerdo a lo que se muestra

2- Yo como jugador quiero filtrar los pokemons de acuerdo a su tipo para  identificar sus características según el tipo.

Criterios de aceptación:
- Tener un menú para seleccionar el tipo por el que se quiere filtrar desde cualquier pantalla.
- Mostrar los cards de los pokemons filtrados por su numero.
- Título que indique que tipo de pokemon se esta mostrando.


3- Yo como jugador quiero tener la opción de ordenar una lista de pokemons por el orden alfabético para poder encontrar mas rápidamente mis pokemons favoritos

Criterios de aceptación:
- Tener un menú para seleccionar el tipo por el que se quiere filtrar desde cualquier pantalla.
- Título que indique el orden que tienen los cards.
- Al seleccionar la opción para ordenar, debe tomar la data completa de los pokemons y también la data previamente filtrada.
- El resultado del orden debe ser la impresión de las cards por número de pokemon.



## **6-Prototipos Baja y Alta Fidelidad**

El prototipo de Baja Fidelidad implementamos aspectos generales del como queriamos que este proyecto se desarrollara sin entrar en detalles. Permitiendonos abarcar un espectro mayor de la interacción que realizariamos. 

<img src = src/img/flujo.jpeg >
<img src = src/img/baja1.jpeg >
<img src = src/img/baja2.jpeg >
<img src = src/img/baja3.jpeg >
<img src = src/img/baja4.jpeg >
<img src = src/img/baja5.jpeg >

Se realizaron 7 pruebas con el prototipo de baja fidelidad de la que obtuvimos feedback sobre el diseño y amigabilidad del sitio, lo anterior fue modificado en el prototipo de alta fidelidad mostrado a continuación.

El prototipo de Alta fidelidad implementamos el feedback de los usuarios con los aspectos más precisos de la app. 

**Figma link**  https://www.figma.com/file/Jzr8AU353QizcpJlGnxIohHS/Untitled?node-id=0%3A1

**Zeplin link** zpl.io/2pvEEoQ 

# **7- POKEDEX**

## ¿Que es Pokedex?

Aplicacion Web, diseñada para jugadores principiantes de Pokemon Go, los que a traves del navegador podran acceder facilmente a los pokemons de la region KANTO, primera generacion (151). Visualizar la informacion basica de cada uno de ellos en la pantalla de inicio. 

Podran acceder a informacion relevante de cada uno de ellos como nombre, numero, debilidad y tipo. 


La interfaz permite al usuario:
* Vizualizar Data.
* Ordenar la Data Alfabeticamente.
* Ordenar la Data por Numero.
* Filtrar la Data por Tipo.
* Ver el calculo de la cantidad en % de cada pokemon segun su tipo en una tabla de estadisticas.

<img src = src/img/pagina1.jpeg >
<img src = src/img/pagina2.jpeg >
<img src = src/img/pagina3.jpeg >
<img src = src/img/pagina4.jpeg >

## **Checklist**

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
