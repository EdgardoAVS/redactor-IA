import Select from "react-select";

function App() {
  const optionsLanguage = [
    { value: "ingles", label: "Inglés" },
    { value: "italiano", label: "Italiano" },
    { value: "espanol", label: "Español" },
    { value: "chino", label: "Chino (simplificado)" },
    { value: "hindi", label: "Hindi" },
    { value: "portugues", label: "Portugués" },
    { value: "arabe", label: "Árabe" },
    { value: "bengali", label: "Bengalí" },
    { value: "ruso", label: "Ruso" },
    { value: "japones", label: "Japonés" },
    { value: "frances", label: "Francés" },
  ];

  const optionsCountry = [
    { value: "global", label: "Global" },
    { value: "us", label: "Estados Unidos" },
    { value: "ca", label: "Canadá" },
    { value: "gb", label: "Reino Unido" },
    { value: "de", label: "Alemania" },
    { value: "fr", label: "Francia" },
    { value: "es", label: "España" },
    { value: "it", label: "Italia" },
    { value: "jp", label: "Japón" },
    { value: "cn", label: "China" },
    { value: "in", label: "India" },
    { value: "ar", label: "Argentina" },
    { value: "bo", label: "Bolivia" },
    { value: "cl", label: "Chile" },
    { value: "co", label: "Colombia" },
    { value: "cr", label: "Costa Rica" },
    { value: "do", label: "República Dominicana" },
    { value: "ec", label: "Ecuador" },
    { value: "gt", label: "Guatemala" },
    { value: "hn", label: "Honduras" },
    { value: "mx", label: "México" },
    { value: "ni", label: "Nicaragua" },
    { value: "pa", label: "Panamá" },
    { value: "py", label: "Paraguay" },
    { value: "pe", label: "Perú" },
    { value: "pr", label: "Puerto Rico" },
    { value: "sv", label: "El Salvador" },
    { value: "uy", label: "Uruguay" },
    { value: "ve", label: "Venezuela" },
  ];

  const onSubmitForm = () => {};

  return (
    <>
      <main className="container mx-auto my-5">
        {/* <h1 className="text-4xl font-bold text-center">Redactor con IA</h1> */}
        <section className="section-form my-5">
          <form onSubmit={onSubmitForm}>
            <div
              className="section-language flex flex-row justify-between gap-3"
              id="section-language"
            >
              <div className="section-left w-full">
                <label>
                  Idioma:
                  <Select
                    options={optionsLanguage}
                    defaultValue={{ label: "Español", value: "espanol" }}
                  />
                </label>
              </div>
              <div className="section-right w-full">
                <label>
                  País:
                  <Select
                    options={optionsCountry}
                    defaultValue={{ label: "Global", value: "global" }}
                  />
                </label>
              </div>
            </div>

            <div className="section-apis flex flex-col my-5 gap-1" id="section-apis">
              <div className="section-openai flex w-full">
                <label className="text-red-600">
                  Clave API OpenAI: *{" "}
                  <input className="border rounded p-1"
                    id="api_key"
                    type="password"
                    placeholder="sk-RGHH5JZel..."
                  />
                </label>
              </div>
              <div className="section-vs w-full">
                <label>
                  Clave API Value SERP: {" "}
                  <input className="border rounded p-1"
                    id="api_key_vs"
                    type="password"
                    placeholder="0E39AA..."
                  />
                </label>
              </div>
            </div>

            <div className="section-keyword" id="section-keyword">
              <div className="section-left">
                <label>
                  Palabra clave: *
                  <input id="keyword" type="text" placeholder="qué es ..." />
                </label>
                <button id="generarTituloButton">Redactar título</button>
              </div>
              <div className="section-right">
                <label>
                  Título: *
                  <input id="title" type="text" placeholder="Qué es ..." />
                </label>
                <button id="redactarArticuloButton">Redactar artículo</button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
