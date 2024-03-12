#!/bin/bash
echo "Baixando atualizações do código..."
git pull

echo "Gerando nova imagem docke com o novo código de PRODUÇÃO"
docker build -t krieegor/nomos-fe .

echo "Envio para repositório local realizado."
echo "Aguardando 10s para iniciar deploy..."
sleep 10s

echo "Definindo variável DOCKER_IMAGE"
DOCKER_IMAGE="krieegor/nomos-fe"

# Encontra os containers, desliga e remove para criar os novos
echo "Removendo os conteinerês atuais:"
docker ps --filter name=PROD-FRONTEND -aq | xargs docker stop | xargs docker rm

# Sobe as instâncias dos conteineres
echo "Subindo novos conteineres:"
docker run -d --name PROD-FRONTEND-ADV-1 -p 6800:80 ${DOCKER_IMAGE}