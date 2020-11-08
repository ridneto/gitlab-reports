## backend gobarber

Rodando local, caso não tenha o container da base na memória, crie c/ seguinte comando:

docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

docker run --name mongodb -p 27017:27017 -d -t mongo

Caso o container esteja apenas stopado

docker start gostack_postgres

docker start mongodb

Confirme que tenha uma base de dados criada no container seguindo as configs do arquivo ormconfig.json
