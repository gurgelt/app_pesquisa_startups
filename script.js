function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // se campoPesquisa for uma string vazia
    if (campoPesquisa == "") {
      section.innerHTML = "Nenhuma startup foi encontrada";
      return;
    }
  
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = ""
    let titulo = "";
    let fundacao = "";
    let setor = "";
    let ultima_capitacao = "";
    let principais_investidores = "";
    let tags = ""
    let link = ""
  
    // Itera sobre cada item da lista de linguagens e constrói o HTML
    for (let item of lista_startups) {

      titulo = item.titulo.toLowerCase();
      fundacao = item.fundacao.toLowerCase();
      setor = item.setor.toLowerCase();
      ultima_capitacao = item.ultima_capitacao.toLowerCase();
      principais_investidores = item.principais_investidores.toLowerCase();
      tags = item.tags.toLowerCase();
      // se titulo includes campoPesquisa
      if (
        titulo.includes(campoPesquisa) ||
        fundacao.includes(campoPesquisa) ||
        setor.includes(campoPesquisa) ||
        ultima_capitacao.includes(campoPesquisa) ||
        principais_investidores.includes(campoPesquisa) ||
        tags.includes(campoPesquisa) ||
        link.includes(campoPesquisa)
      ) {
        // cria um novo elemento
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href=${item.link} target="_blank">${item.titulo}</a>
            </h2>
            <p class="descricao-meta">
              ${item.setor}
            </p>
            <p class="descricao-meta">
              ${item.ultima_capitacao}
            </p>
            <p class="descricao-meta">
              ${item.principais_investidores}
            </p>
          </div>`;
      }
    }
    if (!resultados) {
        resultados = "Digite uma Startup válida";
      }
  
    // Atualiza o conteúdo da seção com o HTML gerado
    section.innerHTML = resultados;
  }