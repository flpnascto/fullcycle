# Anotações

- Para realizar uma operação com todos so containers, selecione-os com `$(docker ps -q)`.

```sh
docker stop $(docker ps -q) # parar todos so containers
```

- Ao criar um arquivo **docker-entrypoint.sh** adicionar ao final do arquivo o comando `exec "$@"` para que seja executado o comando que vier posteriormente a execução do arquivo.

- Executar um container com o comando `-rm` faz com que ele seja removido após finalizado o serviço.

- Para subir uma imagem para o DockerHub realizar o login via terminal: `docker login`

## Networks

- Para que um container acesse a sua máquina utilize o endereço: `http://host.docker.internal:${PORT}`

### bridge (default)

### host

o container e a máquina ficam na mesma rede host da máquina. Não é necessário expor as portas do container.

⚠️ No MacOS esta rede não funciona bem pois o DockerDesktop emula um maquina docker, logo a rede não é exatamente a mesma do MasOS.

### overlay

possibilita a comunicação de containers que estejam em máquinas diferentes (docker swarm)

### maclan

### none

não cria rede
