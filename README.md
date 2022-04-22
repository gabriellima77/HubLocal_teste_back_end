# Back End da aplicação ILocation

## Técnologias usadas

- Nodejs
- Express
- TypeOrm
- Postgress
- Docker
- JSON WEB TOKEN
- TypeScript
- Swagger

## Descrição

ILocation é uma api para cadastro de empresas e seus locais de atendimento.

## Instalando e rodando a aplicação

- Para usar a aplicação com o docker:

```console
foo@bar:~$ sudo docker-compose up -d
```

- Após tudo estar pronto rodar as migrações:

```console
foo@bar:~$ sudo docker exec -it desafio_hub /bin/bash
root@:/usr/app# yarn typeorm migration:run -d ./src/database/index.ts
```

- Com todas as tabelas criadas agora é só usar a api na porta: 3333;

## Documentação

- A documentação da API foi feita com o swagger-ui está na rota "/api-docs"
- Para ver a documentação basta com a api rodando clicar [aqui](http://localhost:3333/api-docs/)
