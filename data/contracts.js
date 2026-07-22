// Datos de contratos y convenios (contenido puro, sin lógica de render).
// Para agregar un nuevo contrato: añade un objeto al arreglo siguiendo la
// misma forma. status: "active" | "coming-soon".

export const CONTRACTS = [
  {
    id: "invias-873",
    status: "active",
    tag: "Convenio interadministrativo",
    num: "N.° 873 de 2026",
    obj: "Caracterización de la infraestructura vial de la red regional del Instituto Nacional de Vías (INVIAS).",
    detail: {
      eyebrow: "Convenio interadministrativo n.° 873 de 2026",
      title: "Caracterización de la infraestructura vial de la red regional de INVIAS",
      context: "Este contrato levanta en campo el estado real de la red vial regional a cargo del Instituto Nacional de Vías: por cada tramo se verifica el <b>código de vía</b>, la <b>longitud</b>, la <b>ubicación</b> y el <b>estado</b> del corredor, usando aplicativos de captura como FieldMaps, OruxMaps, Survey123 y herramientas SIG. El equipo se organiza por zonas, con especialistas de campo y coordinadores que consolidan el avance de su zona.",
      blocks: [
        {
          h: "Cada tramo debe identificarse con su código completo",
          p: "Todo trabajo de campo debe quedar identificado con el código de vía, el municipio y departamento, la longitud inicial frente a la longitud verificada en campo, y el estado del tramo. Un tramo sin código no es un tramo verificable.",
          example: "Código 63171 — Lebrija, Santander — long. inicial 4,20 km — long. campo 4,18 km — Estado: OK"
        },
        {
          h: "En labores de coordinación, debe distinguirse la gestión propia del consolidado",
          p: "Cuando el informe incluya tablas de avance de todo el equipo, debe precisarse qué corresponde a la gestión directa de coordinación y qué constituye el consolidado de los especialistas a cargo. Una tabla de equipo no debe interpretarse como evidencia del levantamiento individual."
        },
        {
          h: "Evidencia nueva cada mes",
          p: "Deben adjuntarse capturas (FieldMaps, OruxMaps, Survey123, ArcGIS/SIG) que correspondan al mes y al tramo reportado. Si un tramo vuelve a aparecer en un mes posterior, debe indicarse la razón —control de calidad, corrección o verificación adicional— para dejar constancia de que no se trata de información repetida."
        },
        {
          h: "Debe verificarse que el archivo cargado corresponde al propio contratista",
          p: "Antes de cargar el informe, debe confirmarse que el PDF corresponde al número de cédula, la zona y el mes correctos. Un anexo o informe de otro contratista incluido por error retrasa la aprobación mucho más que un error de redacción."
        },
        {
          h: "El cronograma y el informe deben ser coherentes entre sí",
          p: "Si el mes reporta un municipio o una zona distinta a la proyectada en el cronograma anterior, debe indicarse y justificarse el cambio —reprogramación, imprevisto de campo o instrucción técnica del contrato— en lugar de dejarlo sin explicación."
        }
      ],
      closing: "La aplicación de estas recomendaciones agiliza la revisión del informe y reduce las observaciones de auditoría."
    }
  },
  { id: "placeholder", status: "coming-soon", tag: "Próximo proyecto", num: "—", obj: "Aquí aparecerá cuando se agregue un nuevo contrato o convenio." }
];
