
<h1 align="center">
  :computer: Design Pattens - Singleton
</h1>
<br>

## :clipboard: Descrição

A atividade consiste em analisar e propôr melhorias de código a um projeto existente, integrando com conhecimentos dos conteúdos anteriores e identificar ajustes relacionados a código limpo e aplicar a melhoria.

## 💻 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
- **Typescript**

## Sobre o Singleton

O Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância. É motivo de dabate, muitos apontando como um não padrão já que o Singleton faz mais de uma coisa, quebrando assim o Princípio da Responsabilidade Única.

Geralmente é utilizado para acesso a recursos compartilhados, como base de dados, interfaces gŕaficas e servidores de impressão.

Também é utilizado para substituir variáveis globais, criando um ponto de acesso global.

### Pontos Fortes
- Substitui variáveis globais
- Certeza que instância não será substituida ou reescrita
- Só é criado no momento do uso

### Pontos Fracos
- Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez.
- Difícil de testar quando é muito grande
- Requer tratamento especial em caso de concorrência
- Pode mascarar um design ruim


Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---
By [Elias Wojahn](https://github.com/eli-wojahn).
