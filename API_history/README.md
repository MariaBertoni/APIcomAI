# MariAngel - Conte Sua História
# Autores : Maria Eduarda Bertoni Santine e Angel Guassú Ventura 


# Descrição
Este é um projeto para criar histórias personalizadas usando um formulário interativo que coleta informações sobre o personagem principal, ambiente, tempo e outros elementos da narrativa. Com base nas entradas do usuário, o sistema gera uma história utilizando o modelo de linguagem generativo da Gemini. O projeto foi desenvolvido usando Flask para o back-end e JavaScript para a interação front-end.

# Tecnologias Utilizadas
- Flask: Framework web em Python usado para criar a API que recebe as informações e gera as histórias.
- JavaScript (Fetch API): Utilizado para enviar dados do formulário ao back-end e manipular as respostas.
- HTML e CSS: Utilizados para construir a interface de usuário do aplicativo.
- Google Generative AI (Gemini): Modelo de linguagem usado para gerar as histórias com base nas entradas do usuário.
- Git e GitHub: Para controle de versão e colaboração.

# Funcionalidades Principais
O aplicativo oferece as seguintes funcionalidades:

- Criação de Histórias Personalizadas: Os usuários podem preencher um formulário com detalhes sobre o personagem, ambiente e outros elementos da história. A aplicação gera uma história com base nesses dados.

- Armazenamento Local: As histórias geradas podem ser salvas no armazenamento local do navegador para visualização posterior.

- Interface Interativa: Uma interface intuitiva que guia o usuário no preenchimento dos campos necessários para a criação da história.

# Instruções de Configuração

Para configurar e executar o projeto em sua máquina local, siga estas etapas:

- Clone o Repositório:
    git clone https://github.com/SuaConta/MariAngel.git
    cd MariAngel
- Instale as Dependências:
    pip install Flask flask-cors google-generativeai
- Execute o Aplicativo:
    python app.py
- Acesse o Aplicativo no Navegador:
    Abra um navegador da web e acesse http://localhost:5000 para interagir com o formulário e gerar histórias.

# Estrutura do Projeto
- app.py: O código principal do back-end Flask que lida com as requisições e gera histórias.
- templates/: Diretório contendo os arquivos HTML.
- static/: Diretório contendo arquivos estáticos, como CSS, JavaScript e imagens.
- formulario.html: Página do formulário onde o usuário insere as informações para criar a história.
- final.html: Página onde a história gerada é exibida.
- inicio.html: Página inicial que direciona o usuário para o formulário.

# Licença
Este projeto é fornecido sob a Licença MIT.

# Contribuições
Contribuições são bem-vindas. Sinta-se à vontade para fazer um fork do repositório e abrir um Pull Request com melhorias, correções ou novos recursos.

# Contato

Para mais informações, entre em contato com:
- [Instrutor de Programação Web Front-End]: Sesi Senai Itapeva
- [Instrutor de Programação Web Back-End]: Sesi Senai Itapeva