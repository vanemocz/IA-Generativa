🛒 Merca Fácil – Prompts utilizados

https://mercaeasy.lovable.app ---> Pagina web

App web que ayuda a una persona a armar su lista de mercado y saber en qué supermercado le sale más barato, si el presupuesto alcanza y qué recetas puede cocinar.

Herramienta que generó la app: Lovable
Asistente para refinar los prompts: Claude
Cantidad de prompts: 4, enviados en orden

***
📋 Resumen de los prompts

#	Prompt	Qué hace	Estado
1	Base	Crea la app completa con 3 pestañas, datos de ejemplo y regla del 75% para recetas	Aplicado en Lovable
2	Datos, precios y recetas	Reemplaza los datos por la base real (3 supermercados, 3 marcas por producto)	Listo para aplicar
3	Diseño	Precios por tienda en la lista, lista fija a la derecha, categorías con emoji y carrito en celular	Listo para aplicar
4	Pestañas nuevas	Agrega Sugerencias y Mis mercados (quedan 5 pestañas)	Listo para aplicar
	> Orden de uso: copiar y pegar cada prompt en Lovable, uno después de otro. El Prompt 1 crea la app; los Prompts 2, 3 y 4 son mensajes sobre la app ya creada.

***
✅ Principios que seguimos al escribirlos

Definir la fuente de datos: "Úsalos tal cual: no los modifiques."
Nombrar elementos concretos, no posiciones vagas.
Decir qué pasa al tocar cada botón.
Proteger lo que ya funciona: "No cambies nada más de lo que ya funciona."
Sin dato no es cero: null significa "no disponible".
Pedir las suposiciones al final de la respuesta.

***
Prompt 1 · Base

Se envía primero en Lovable y crea la app. Antes de enviarlo, reemplazar los textos entre corchetes [...].

Crea una aplicación web en español llamada [NOMBRE DE LA APP] que ayuda a
cualquier persona que hace mercado a saber en qué tienda le sale más barato
todo su mercado, a ver si su presupuesto alcanza y qué recetas puede
cocinar con lo que compra.

USUARIO
Cualquier persona que haga mercado (familias, estudiantes, adultos
mayores). Debe ser muy fácil de usar, pensada primero para celular, con
letra grande y textos claros. Todos los precios en pesos colombianos, con
formato de miles (por ejemplo $12.800).

DATOS (simulados)
No uses APIs, backend ni bases de datos externas. Todo corre en el
navegador. Guarda los datos en archivos separados dentro del código
(uno para productos y otro para recetas) para que se puedan editar
fácilmente. Muestra un aviso visible en la app: "Precios de ejemplo, no son
precios reales".
No inventes productos, precios ni recetas distintos a los que te entrego.

1) Tiendas: Mercado Central, Súper Barrio, Plaza Express.

2) Productos. Columnas: Producto | Unidad | canastaFamiliar | Mercado
Central | Súper Barrio | Plaza Express (precios en COP):
Arroz blanco | 1 kg | true | 4800 | 5200 | 5000
Huevos | docena | true | 9000 | 9600 | 9300
Aceite de girasol | 1 L | true | 12800 | 12200 | 13400
Fríjol rojo | 500 g | true | 6700 | 7200 | 7000
Lentejas | 500 g | true | 3700 | 4000 | 3900
Panela | 500 g | true | 3100 | 3400 | 3300
Papa pastusa | 1 kg | true | 2900 | 3300 | 3100
Plátano verde | unidad | true | 1100 | 1300 | 1200
Leche entera | 1 L | true | 4600 | 4400 | 4900
Sal | 500 g | true | 1800 | 1700 | 2000
Azúcar | 1 kg | true | 4700 | 5000 | 4900
Harina de maíz | 500 g | true | 3500 | 3800 | 3700
Cebolla cabezona | 1 kg | true | 3400 | 3700 | 3600
Tomate chonto | 1 kg | true | 4000 | 4300 | 4100
Pechuga de pollo | 1 kg | true | 18200 | 16900 | 17600
Zanahoria | 1 kg | true | 2700 | 3000 | 2900
Pasta espagueti | 250 g | false | 2600 | 2500 | 2300
Yuca | 1 kg | false | 2500 | 2800 | 2700
Queso campesino | 500 g | false | 14500 | 13800 | 15200
Mantequilla | 250 g | false | 7900 | 7500 | 7200
Atún en lata | 160 g | false | 5900 | 5600 | 5200
Café molido | 250 g | false | 9800 | 9400 | 8900
Chocolate de mesa | 500 g | false | 10500 | 9900 | 9600
Galletas de paquete | paquete x6 | false | 5200 | 4900 | 4500
Papas fritas de paquete | paquete | false | 3300 | 3100 | 2800
Gaseosa | 1.5 L | false | 5800 | 5500 | 5100
Jugo en caja | 1 L | false | 4900 | 4600 | 4300
Salchichas | paquete x8 | false | 8400 | 7900 | 8100
Mayonesa | 400 g | false | 7200 | 6800 | 6500
Ajo | cabeza | false | 700 | 800 | 600

3) Recetas, una por línea, con el formato "Nombre de la receta:
Ingrediente 1, Ingrediente 2, ..." usando los nombres exactos del
catálogo:
[PEGAR AQUÍ LAS RECETAS]

ESTRUCTURA
Una sola página con 3 pestañas (navegación inferior en celular):
"Mi mercado", "Resultado" y "Recetas". Todo se recalcula al instante cada
vez que cambia la lista o el presupuesto. No hay botón "Calcular".

PESTAÑA 1 - MI MERCADO
- Buscador con autocompletado para agregar productos del catálogo. La
  búsqueda debe ignorar mayúsculas y tildes (por ejemplo, "frijol" debe
  encontrar "Fríjol rojo").
- Si el usuario busca algo que no está en el catálogo, muestra el mensaje
  "No encontramos ese producto todavía, estamos agregando más" y debajo
  sugiere otros productos del catálogo que aún no estén en su lista,
  empezando por los de canasta familiar. Nunca permitas agregar productos
  que no estén en el catálogo.
- Cada producto de la lista muestra su unidad, tiene cantidad con botones
  + y −, y una opción para quitarlo.
- Campo para ingresar el presupuesto en pesos colombianos.

PESTAÑA 2 - RESULTADO
- Destaca la tienda donde TODO el mercado sale más barato: nombre, total y
  cuánto se ahorra frente a la tienda más cara. Debajo, el ranking de las
  demás tiendas con su total.
- Si la lista está vacía, muestra: "Agrega productos a tu mercado para ver
  dónde te sale más barato".
- Si no hay presupuesto ingresado, muestra: "Ingresa tu presupuesto para
  saber si te alcanza".
- Compara el total de la tienda más barata con el presupuesto:
  * Si alcanza: mensaje positivo indicando cuánto sobra.
  * Si no alcanza: mensaje claro indicando cuánto falta. Este mensaje
    aparece en la parte superior de las pestañas "Mi mercado" y
    "Resultado". Además, en la lista de "Mi mercado", resalta con una
    etiqueta "Canasta familiar" los productos con canastaFamiliar = true,
    para indicarle cuáles son de primera necesidad.

PESTAÑA 3 - RECETAS SUGERIDAS
- Con los productos de la lista, muestra las recetas de las que el usuario
  ya tenga al menos el 75% de los ingredientes (redondeando hacia arriba).
  Ordena: primero las completas, luego las que tengan menos ingredientes
  faltantes.
- En cada receta, marca con ✓ los ingredientes que ya tiene y los que
  faltan con una etiqueta roja "Te falta", mostrando su precio en la
  tienda más barata del momento.
- Cada ingrediente faltante tiene un botón "+" que lo agrega a "Mi
  mercado" y recalcula todo al instante (totales, tienda más barata,
  presupuesto y recetas). Una vez agregado, el botón cambia a "−" para
  quitarlo.

DISEÑO
Paleta de colores: [PEGAR LOS CÓDIGOS HEX DE COOLORS]. Estilo: [por
ejemplo: limpio, amigable, tarjetas redondeadas, botones grandes].
[Opcional: usa la imagen adjunta solo como inspiración para la
distribución; no la copies.]

RESTRICCIONES
Sin registro ni login, sin backend, sin pagos. Código ordenado, con
componentes separados y comentarios sencillos.
Si algo no está definido, toma la decisión más simple y, al final de tu
respuesta, lista en 3 líneas las suposiciones que hiciste.

***
Prompt 2 · Datos, precios y recetas

Mensaje 1 de 3. Antes de enviarlo se adjuntan los dos archivos JSON (base_datos_supermercados.json y recetas_completas_medellin.json).

Vamos a cambiar los datos de la app. Los archivos
data/base_datos_supermercados.json (productos y precios simulados) y
data/recetas_completas_medellin.json (recetas) ya están en el proyecto.
Úsalos tal cual: no los modifiques ni los copies a mano. Reemplaza los
datos anteriores por estos archivos. No cambies el diseño ni las
pestañas todavía.

PRODUCTOS Y PRECIOS (base_datos_supermercados.json)
Estructura: supermercados: ["D1", "Exito", "Jumbo"]. categorias[] con
id_categoria, nombre y productos[]. Cada producto: id_producto, nombre,
unidad_medida, presentacion y marcas[] (3 marcas). Cada marca:
id_referencia, marca y precios { D1, Exito, Jumbo }.

REGLAS DE PRECIOS
1. Cada precio es por PRESENTACIÓN (por ejemplo "Bolsa de 500 g"), no por
   unidad_medida. En la lista muestra la presentación junto al nombre; la
   cantidad es el número de presentaciones.
2. null significa "no disponible en esa tienda". NUNCA lo trates como 0
   ni como gratis.
3. Un producto de la lista es un id_producto. Su precio en cada tienda es
   el más bajo no nulo entre sus 3 marcas en esa tienda; muestra debajo
   del precio la marca usada. Si ninguna marca tiene precio ahí, muestra
   "No disponible".
4. Total de cada tienda = suma de precio × cantidad de los productos que
   sí tiene. Si le faltan productos de la lista, muestra "Le faltan N
   productos" y cuáles.
5. Tienda recomendada: entre las tiendas que tienen TODOS los productos de
   la lista, la de menor total. Si ninguna los tiene todos, la que tenga
   menos faltantes (desempate: menor total), con un aviso que diga qué
   productos habría que comprar en otra tienda. Una tienda sin ningún
   precio para la lista aparece al final como "Sin datos".
6. Si un producto no tiene precio en ninguna tienda, avisa "Este producto
   no tiene precio en ninguna tienda" y no lo sumes a los totales.

CANASTA FAMILIAR
El archivo no trae ese campo. Son de canasta familiar los id_producto:
PROD001, PROD003, PROD004, PROD005, PROD012, PROD023, PROD045, PROD047,
PROD048, PROD050, PROD056, PROD058, PROD059, PROD060, PROD061.
Defínelo en data/canasta.ts para poder editarlo.

EMOJIS DE CATEGORÍAS (data/categorias.ts: id_categoria → emoji)
CAT001 🌾, CAT002 🥛, CAT003 🍗, CAT004 🍎, CAT005 🥕, CAT006 🧂,
CAT007 🥖, CAT008 🧽, CAT009 🧴, CAT010 🥤

RECETAS (recetas_completas_medellin.json)
Estructura: recetas[] con id_receta, nombre, tiempo_comida,
categoria_base[], ingredientes_principales[] (id_producto, nombre,
presentacion), ingrediente_gancho { id_producto, nombre, presentacion,
razon } y preparacion[] (lista de pasos).
Reglas:
1. Relaciona los ingredientes con el catálogo SOLO por id_producto, sin
   importar la marca. El nombre, la presentación y el precio se toman
   siempre de base_datos_supermercados.json (la presentación escrita en
   el archivo de recetas puede diferir; ignórala).
2. El usuario "tiene" un ingrediente si su id_producto está en su lista
   de "Mi mercado".
3. Una receta se sugiere cuando el usuario tiene al menos el 75% de sus
   ingredientes_principales, redondeando hacia arriba (con 5 principales,
   al menos 4; con 4 principales, al menos 3). El ingrediente_gancho NO
   cuenta para ese porcentaje.
4. Orden: primero las completas (tiene todos los principales) y después
   las que tengan menos faltantes.
5. Cada tarjeta muestra: nombre, etiqueta del momento (tiempo_comida),
   los ingredientes principales (✓ si ya lo tiene; si no, una etiqueta
   roja "Te falta" con su precio más bajo, la tienda donde se consigue y
   un botón "+") y el ingrediente_gancho con una etiqueta distinta
   "Sugerido", su razón, su precio y un botón "+". El gancho se muestra
   aunque la receta esté completa.
6. El botón "+" agrega el producto a "Mi mercado" y recalcula todo al
   instante (totales, tienda recomendada, presupuesto y recetas). Los
   ingredientes agregados desde la receta cambian a "−" para quitarlos.
7. Un botón "Ver preparación" despliega los pasos numerados de
   preparacion.
8. Si un ingrediente no tiene precio en ninguna tienda, muestra "Sin
   precio" y no lo sumes a los totales.
9. Si no hay recetas para la lista actual, muestra "Agrega productos a tu
   mercado para ver recetas sugeridas".

AJUSTES
- El buscador sigue ignorando tildes y mayúsculas, ahora sobre los nombres
  del archivo.
- Mantén el aviso "Precios de ejemplo, no son precios reales".
Al final de tu respuesta, lista en 3 líneas las suposiciones que hiciste.

***
Prompt 3 · Diseño

Mensaje 2 de 3.

Haz estos cambios de diseño. No cambies nada más de lo que ya funciona.

1. PRECIOS POR TIENDA EN LA LISTA
Al lado de cada producto de la lista muestra su precio en cada una de las
3 tiendas (precio × cantidad, con la marca usada en letra pequeña). Resalta
en verde el más barato de cada producto; si una tienda no lo tiene, "No
disponible". Al final de la lista agrega una fila "Total" con el total de
cada tienda (con "Le faltan N" si aplica) y resalta la tienda recomendada.
Todo se actualiza al instante.

2. COMPUTADOR
- La lista va siempre visible en una columna fija al lado derecho, en todas
  las pestañas. Contiene los productos, precios por tienda, Total y el
  presupuesto con su mensaje.
- En "Mi mercado", debajo del buscador, muestra las categorías como
  cuadritos (emoji + nombre), 5 por fila. Al tocar una se muestran debajo
  sus productos, cada uno con su presentación, su precio más bajo y un
  botón "+". Tocar otra vez la misma (o un botón "Todas") quita el filtro.
  El buscador sigue buscando en todos los productos.
- "Mi mercado" conserva su nombre y contenido; en PC la página solo se
  desplaza más.

3. CELULAR
- La lista no se muestra en la pantalla principal. En la esquina inferior
  derecha, por encima de la barra de navegación, hay un botón redondo con
  un carrito y un globito con la cantidad de productos.
- Al tocarlo, la lista sube como un panel casi a pantalla completa, con el
  mismo contenido que en computador y un botón para cerrarlo.
- Las categorías van como cuadritos, 2 por fila.

Al final lista las suposiciones que hiciste.

***
Prompt 4 · Pestañas nuevas

Mensaje 3 de 3. Agrega Sugerencias y Mis mercados.

Agrega 2 pestañas nuevas. Quedan 5: Mi mercado, Resultado, Recetas,
Sugerencias y Mis mercados. En celular la barra inferior muestra las 5 con
ícono y nombre corto. No cambies nada más.

PESTAÑA "SUGERENCIAS"
- Usa el presupuesto ya ingresado en la lista. Si no hay, muestra "Ingresa
  tu presupuesto para ver sugerencias" con un campo que actualice ese mismo
  valor.
- Muestra los mercados de data/sugerencias.ts cuyo total en la tienda
  recomendada (reglas de precios del archivo) esté entre presupuesto −
  100.000 y presupuesto + 100.000.
- Cada tarjeta: nombre, descripción, número de productos, total y nombre de
  la tienda recomendada. Botón "Ver productos" (despliega la lista con
  cantidades) y botón "Usar este mercado".
- "Usar este mercado" carga los productos en "Mi mercado" y abre esa
  pestaña. Si la lista ya tenía productos, pregunta: "Reemplazar mi lista",
  "Agregar a mi lista" o "Cancelar".
- Si ninguno entra en el rango, muestra los 2 más cercanos al presupuesto
  con un aviso.

data/sugerencias.ts (formato id_producto:cantidad en presentaciones):
1. Mercado express (1-2 personas, 1 semana): PROD001:1, PROD005:1,
   PROD045:2, PROD047:1, PROD048:1, PROD050:1, PROD023:1, PROD012:3,
   PROD034:1, PROD059:1
2. Mercado básico familiar (4 personas, 1 semana): PROD001:3, PROD004:1,
   PROD005:1, PROD056:1, PROD058:1, PROD059:1, PROD061:1, PROD045:3,
   PROD047:2, PROD048:2, PROD050:2, PROD055:1, PROD023:2, PROD012:6,
   PROD034:2, PROD036:1, PROD069:2, PROD063:1
3. Mercado de 15 días, ahorro (4 personas, lo esencial): PROD001:3,
   PROD004:1, PROD005:1, PROD010:1, PROD056:1, PROD058:1, PROD059:1,
   PROD061:1, PROD045:3, PROD047:2, PROD048:2, PROD050:2, PROD055:1,
   PROD023:2, PROD024:1, PROD025:1, PROD012:8, PROD017:1, PROD034:2,
   PROD036:1, PROD069:2, PROD063:1, PROD079:1, PROD089:1
4. Mercado de 15 días, completo (4 personas, con aseo): PROD001:4,
   PROD004:2, PROD005:2, PROD010:2, PROD056:2, PROD058:2, PROD059:2,
   PROD061:2, PROD045:4, PROD046:1, PROD047:3, PROD048:3, PROD050:2,
   PROD055:2, PROD023:3, PROD024:2, PROD025:2, PROD012:10, PROD017:1,
   PROD034:3, PROD036:2, PROD069:3, PROD063:1, PROD062:1, PROD079:1,
   PROD089:1
5. Mercado del mes, familiar (4 personas, carnes y desayunos): PROD001:4,
   PROD004:2, PROD005:2, PROD007:2, PROD056:2, PROD058:2, PROD059:2,
   PROD061:2, PROD045:5, PROD046:1, PROD047:3, PROD048:3, PROD050:2,
   PROD051:2, PROD053:1, PROD023:4, PROD024:3, PROD025:3, PROD027:2,
   PROD029:2, PROD033:2, PROD012:12, PROD017:2, PROD021:1, PROD034:3,
   PROD036:3, PROD038:2, PROD067:2, PROD069:4, PROD063:2, PROD062:1,
   PROD104:2
6. Mercado del mes, grande (5-6 personas, con aseo): PROD001:5, PROD004:2,
   PROD005:2, PROD007:1, PROD010:2, PROD056:2, PROD058:2, PROD059:2,
   PROD061:2, PROD064:1, PROD045:5, PROD046:1, PROD047:3, PROD048:3,
   PROD050:2, PROD051:1, PROD053:1, PROD055:2, PROD023:4, PROD024:3,
   PROD025:3, PROD027:2, PROD029:2, PROD031:2, PROD033:1, PROD012:14,
   PROD017:2, PROD021:1, PROD034:3, PROD035:2, PROD036:3, PROD038:2,
   PROD067:2, PROD069:4, PROD063:2, PROD062:1, PROD104:2, PROD100:2,
   PROD078:1, PROD082:1, PROD087:1, PROD089:2, PROD090:1, PROD094:1

PESTAÑA "MIS MERCADOS"
- En la lista de "Mi mercado" agrega un botón "Guardar mercado" (nombre
  opcional; si queda vacío, "Mercado del [fecha]").
- Se guarda en el navegador (localStorage), sin login, solo id_producto y
  cantidad (no precios, para recalcular con los precios actuales). Máximo
  5: al guardar el sexto se elimina el más antiguo.
- La pestaña lista los mercados guardados: nombre, fecha, número de
  productos y total en la tienda recomendada. Botones "Cargar para
  modificar" (con la misma pregunta de reemplazar/agregar) y "Eliminar".
- Si se cargó un mercado guardado y se modificó, "Guardar mercado" ofrece
  "Actualizar «nombre»" o "Guardar como nuevo".
- Sin guardados: "Todavía no has guardado mercados".
Al final lista las suposiciones que hiciste.