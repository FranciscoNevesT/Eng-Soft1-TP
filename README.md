# Eng-Soft1-TP

## Equipe
- Francisco Neves Tinoco Junior - 2019006604
- Thiago Henrique Moreira Santos - 2019007074
- Henrique Magalhães de Oliveira Carvalho - 2019006698
- Henrique Furst Scheid - 2017014898

## Objetivo:

- Criar um sistema para hospedagem de artigos cientificos.

## Features:

1. Busca de artigos por metadados como autor, dominio, relevância, etc.
2. Permitir autores cadastrarem os seus artigos e verem estatisticas sobre eles.
3. Recomendação de novos artigos.
4. Mostra estatisticas sobre grupos de artigos.
5. Permitir os usuarios fazerem avaliações.

## Possiveis tecnologias:
- Front: React

- Back: Node

- Banco de dados: SQL

- Auxiliares: Python, html

## Backlog:

### Historias:

- Como autor, eu gostaria de poder subir um artigo.
- Como autor, eu gostaria de poder alterar/deletar um artigo publicado.
- Como usuario, eu gostaria de pesquisar e baixar um artigo.
- Como autor, eu gostaria de poder marcar e vizualizar os outros artigos que eu citei.
- Como autor, eu gostaria de ver estatisticas relacionadas aos meus artigos.
- Como usuario, eu gostaria de poder avaliar os artigos.
- Como usuario, eu gostaria de colocar os artigos em pastas.
- Como usuario, eu gostaria de ver perfis dos autores.
- Como usuario, eu gostaria de receber recomendações de artigos.
- Como usuario, eu gostaria de ver desempenho/estaticas gerais de artigos.

### Sprint 1:
- Tarefas Técnincas:
	- Preparar banco de dados para os artigos e seus metadados [Todos]
	- Prepara ambiente de desenvolvimento [Thiago]
	- Preparar a pagina web inicial [Furst]

- Histórias: Como autor, eu gostaria de poder subir um artigo.
- Tarefas:
	- Criar e testar rota para dar o upload do artigo em formato pdf [Furst]
	- Criar o formulario para subir o artigo [Francisco]
	- Criar e testar rota para pagina que tem os artigos publicados [Thiago]

- Histórias: Como autor, eu gostaria de poder alterar/deletar um artigo publicado.
- Tarefas:
	- Criar e testar rota para a alteração do artigo. [Magalhães]
	- Criar um formulario pre-prenchido para a alteração. [Francisco]
	- Criar e testar rota para deletar o artigo. [Thiago]
	- Criar o metodo de atualizar as citações linkadas ao artigo. [Magalhães]

- Histórias: Como usuario, eu gostaria de pesquisar e baixar um artigo.
- Tarefas:
	- Criar e testar rota para a pesquisa do artigo. [Magalhães]
	- Criar um metodo de pesquisa. [Magalhães]
	- Criar e testar rota para o dowloand do artigo. [Francisco]

- Histórias: Como autor, eu gostaria de poder marcar e vizualizar os outros artigos que eu citei.
	- Criar uma tabela para citação. [Francisco]
	- Criar uma vizualização para a relação entre os artigos. [Francisco]
	- Criar metodos para manter a consitencia entre os artigos citados. [Furst]

- Histórias: Como autor, eu gostaria de ver estatisticas relacionadas aos meus artigos.
	- Criar e testar rota para as estatisticas. [Thiago]
	- Criar uma vizualização para as estatisticas. [Furst] 
	- Criar uma vizualização para as citações. [Furst]
	- Criar a interface web para os dados. [Thiago,Magalhães]
