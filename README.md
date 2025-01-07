# API Básica com NestJS e MongoDB

Esta é uma **API básica desenvolvida com NestJS** que implementa operações CRUD (Create, Read, Update, Delete) para gerenciar uma lista de tarefas. Cada tarefa tem os seguintes atributos:

- **id**: Identificador único da tarefa.
- **descrição**: Descrição da tarefa.
- **status**: Indica se a tarefa está pendente ou concluída.

## Funcionalidades

A API expõe os seguintes endpoints:

1. **POST /tasks** – Cria uma nova tarefa.
2. **GET /tasks** – Retorna todas as tarefas cadastradas.
3. **GET /tasks/:id** – Retorna uma tarefa específica pelo ID.
4. **PUT /tasks/:id** – Atualiza uma tarefa existente.
5. **DELETE /tasks/:id** – Deleta uma tarefa com o ID especificado.

## Tecnologias

- **NestJS**: Framework Node.js usado para construir a API.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as tarefas.
- **Mongoose**: Biblioteca para modelar objetos MongoDB em JavaScript/TypeScript.

## Fluxo de Implementação

1. **Modelo de Dados (Task)**: 
   A tarefa é representada por um objeto com `id`, `descrição` e `status`.

2. **Conexão com MongoDB**: 
   A aplicação conecta-se ao MongoDB através do Mongoose, permitindo operações como salvar, buscar, atualizar e excluir tarefas.

3. **Controladores e Serviços**: 
   O controlador manipula as requisições HTTP, e o serviço interage com o banco de dados para realizar as operações CRUD.

## Exemplo de Uso

### 1. Criar Tarefa

**POST /tasks**

```json
{
  "descricao": "Estudar NestJS",
  "status": "pendente"
}


