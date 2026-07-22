# Guía de buenas prácticas para informes mensuales

Sitio estático (sin build ni dependencias) con las recomendaciones para la
presentación de informes mensuales de contratistas (CPS). Pensado para
publicarse en un enlace (GitHub Pages).

## Estructura del proyecto

```
.
├── index.html              # Markup semántico (solo contenido, sin estilos ni lógica)
├── assets/
│   ├── css/
│   │   ├── fonts.css       # Declaraciones @font-face (tipografías self-hosted)
│   │   └── styles.css      # Todos los estilos de la página
│   ├── js/
│   │   └── main.js         # Comportamiento: render de tarjetas, dossier, scroll
│   ├── fonts/              # Tipografías .woff2 (Onest, IBM Plex Mono, Source Serif 4)
│   └── img/                # Imágenes (logo masthead, isotipo, logo del dossier)
├── data/
│   └── contracts.js        # CONTENIDO de los contratos (datos, sin lógica)
└── README.md
```

La página se organiza en dos "actos":

- **Acto 1** (`#act1`): los seis principios generales, ejemplos y el selector de
  contratos.
- **Acto 2** (`#act2`): el dossier de recomendaciones específicas de un contrato,
  que se arma dinámicamente en `main.js` a partir de los datos de `contracts.js`.

## Cómo agregar un nuevo contrato

Todo el contenido de los contratos vive en `data/contracts.js`, separado de la
lógica. Para añadir uno, agrega un objeto al arreglo `CONTRACTS` con esta forma:

```js
{
  id: "identificador-unico",
  status: "active",                 // "active" | "coming-soon"
  tag: "Convenio interadministrativo",
  num: "N.° 000 de 2026",
  obj: "Objeto resumido del contrato.",
  detail: {                          // solo para status "active"
    eyebrow: "…",
    title: "…",
    context: "…",                    // admite <b>…</b>
    blocks: [
      { h: "Título del punto", p: "Explicación.", example: "Ejemplo opcional" }
    ],
    closing: "Frase de cierre."
  }
}
```

El objeto `{ status: "coming-soon" }` renderiza una tarjeta placeholder ("Próximo
proyecto") y no necesita `detail`.

## Desarrollo local

La página usa **módulos ES**, que el navegador no carga desde `file://`. Para
verla en local hay que servirla por HTTP:

```bash
python -m http.server 8000
# luego abrir http://127.0.0.1:8000
```

En producción (GitHub Pages) funciona directamente, sin configuración.
