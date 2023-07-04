# Padrões e técnicas avançadas com Git e Github

## Git Flow

Fluxo de Trabalho de [Gitflow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)

![Ramificações](https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=1084)

## Configurações dos nossos branches

### Instalação e geração da chave

- Fazer a instalação do [GnuPG](https://gnupg.org/) com o comando:

```sh
brew install gnupg
```

- Listar as chaves com o comando:

```sh
gpg --list-secret-keys --keyid-format LONG
```

- Criar uma nova chave com o comando:

```sh
gpg --full-generate-key
```

- Escolher a opção RSA and RSA (default);
- O tamanho da chave como 4096;
- Especificar o tempo de expiração da chave;
- Escolher o "Nome Completo" configurado no GitHub;
- Escolher o email cadastrado no GitHub;
- Definir uma senha para a chave;
- Listar as chaves e copiar o ID da chave (rsa4096/`<ID>`);
- Gerar e copiar a chave pública com o comando:

```sh
gpg --armor --export <ID>
```

- Acessar o GitHub e ir em Settings > SSH and GPG keys > New GPG key;
- Colar a chave pública gerada e salvar.

### Configurar o Git para usar a chave criada

- Executar o comando para usar a chave criada:

```sh
git config --global user.signingkey <ID>
```

- Adicionar o comando no arquivo de configuração do terminal, pra o caso do zsh é: `~/.zshrc`:

```sh
export GPG_TTY=$(tty)
```

- Configurar para que o _commit_ e as _tags_ sejam assinadas automaticamente com o comando:

```sh
git config --global commit.gpgsign true
git config --global tag.gpgsign true
```

- Configurar para não pedir a senha da chave toda vez que for fazer um _commit_ ou _tag_ com o comando:

  - Abrir o arquivo `~/.gnupg/gpp.conf` e adicionar a linha: `use-agent` e salvar;

  - Executar o comando:

  - ```sh
    gpgconf --launch gpg-agent
    ```


## Pull Requests / Templates para PR

## Code Review

## Plugin para VSCode

## CODEOWNERS

## SemVer