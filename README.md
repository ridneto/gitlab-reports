## backend gobarber

Rodando local, caso não tenha o container da base na memória, crie c/ seguinte comando:

docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

Caso o container esteja apenas stopado

docker start gostack_postgres

Confirme que tenha uma base de dados criada no container seguindo as configs do arquivo ormconfig.json
