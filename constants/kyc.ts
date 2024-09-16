export const kycSteps = [
  {
    paso: "Paso 1",
    titulo: "Datos personales",
    descripcion:
      "Completa tu información personal básica, incluido el domicilio donde resides.",
  },
  {
    paso: "Paso 2",
    titulo: "Datos Financieros",
    descripcion:
      "Incluye información sobre tu renta, origen de fondos y demás aspectos financieros.",
  },
  {
    paso: "Paso 3",
    titulo: "Alta como Cliente Profesional",
    descripcion:
      "Opcional. Si no eres inversor profesional debes saltar este paso.",
  },
  {
    paso: "Paso 4",
    titulo: "Prueba de Identidad",
    descripcion:
      "Sube tu DNI o Pasaporte (anverso y reverso) y selfie para que comprobemos tu identidad.",
  },
];

export const financialQuestions = [
  {
    id: 1,
    question:
      "¿Has invertido en empresas no cotizadas gestionadas por ti o por otros?",
    opciones: [
      { valor: 1, descripcion: "Sí" },
      { valor: 2, descripcion: "No" },
    ],
  },
  {
    id: 2,
    question:
      "¿Conoces lo que es un Security Token y los riesgos que la inversión en los mismos conlleva?",
    opciones: [
      { valor: 1, descripcion: "Sí" },
      { valor: 2, descripcion: "No" },
    ],
  },
  {
    id: 3,
    question:
      "¿Sabes que invirtiendo en empresas no cotizadas puedes perder hasta el 100% de tu inversión?",
    opciones: [
      { valor: 1, descripcion: "Sí" },
      { valor: 2, descripcion: "No" },
    ],
  },
  {
    id: 4,
    question:
      "¿Qué porcentaje de tu patrimonio quieres invertir en este tipo de productos?",
    opciones: [
      { valor: 1, descripcion: "Menos del 25%" },
      { valor: 2, descripcion: "Entre el 25% y el 50%" },
      { valor: 3, descripcion: "Entre el 50% y el 75%" },
      { valor: 4, descripcion: "Más del 75%" },
    ],
  },
  {
    id: 5,
    question:
      "¿Cuál es el origen de la mayor parte de tus ingresos periódicos?",
    opciones: [
      { valor: 1, descripcion: "No tengo ingresos periódicos" },
      { valor: 2, descripcion: "Prestación por jubilación o incapacidad" },
      { valor: 3, descripcion: "Actividad laboral" },
      { valor: 4, descripcion: "Rentas de bienes e inmuebles en propiedad" },
      { valor: 5, descripcion: "Rendimiento de inversiones financieras" },
    ],
  },
  {
    id: 6,
    question:
      "¿Cuál es el origen del capital que quieres invertir o reinvertir en este tipo de productos?",
    opciones: [
      { valor: 1, descripcion: "Recolocar inversiones financieras existentes" },
      { valor: 2, descripcion: "Herencia o donación" },
      { valor: 3, descripcion: "Ingresos por Negocios" },
      { valor: 4, descripcion: "Otro origen" },
    ],
  },
  {
    id: 7,
    question: "¿Cuál es el horizonte temporal de tu inversión?",
    opciones: [
      { valor: 1, descripcion: "Menos de 6 meses" },
      { valor: 2, descripcion: "Entre 6 meses y 2 años" },
      { valor: 3, descripcion: "Entre 2 y 5 años" },
      { valor: 4, descripcion: "Más de 5 años" },
    ],
  },
  {
    id: 8,
    question: "¿Qué fluctuaciones de tu inversión estás dispuesto a asumir?",
    opciones: [
      {
        valor: 1,
        descripcion:
          "Mi objetivo es preservar el capital invertido y no estoy dispuesto a asumir riesgos",
      },
      {
        valor: 2,
        descripcion:
          "Estoy dispuesto a asumir fluctuaciones moderadas de mi capital invertido",
      },
      {
        valor: 3,
        descripcion:
          "Estoy dispuesto a asumir fluctuaciones elevadas de mi capital invertido",
      },
    ],
  },
  {
    id: 9,
    question: "¿Qué objetivos persigues al realizar la inversión?",
    opciones: [
      { valor: 1, descripcion: "Preservar el capital" },
      {
        valor: 2,
        descripcion:
          "Crecimiento medio del capital, asumiendo un riesgo moderado",
      },
      {
        valor: 3,
        descripcion:
          "Aprovechar las oportunidades del mercado asumiendo riesgo",
      },
      {
        valor: 4,
        descripcion: "Crecimiento fuerte del capital asumiendo fuertes riesgos",
      },
    ],
  },
  {
    id: 10,
    question: "Nivel de Estudios",
    opciones: [
      { valor: 1, descripcion: "No tengo estudios" },
      { valor: 2, descripcion: "Estudios básicos" },
      { valor: 3, descripcion: "Estudios superiores" },
      {
        valor: 4,
        descripcion: "Estudios superiores o postgrado en materia financiera",
      },
    ],
  },
];

export const uploadFiles =
  "Por favor utiliza un formato JPG, PNG o PDF (preferiblemente fotos de al menos 2MP o scans de 200dpi). Asegurate de que la información sea legible. El selfie debe mostrar el anverso de tu DNI. No puede haber información del documento cubierta. Controla que el documento tenga un correcto contraste con el fondo. Si la foto o el scan no es correctamente legible o de una calidad adecuada, deberemos pedirte una nueva copia del mismo";
