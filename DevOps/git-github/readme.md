# ![Git](logo.png)

## Padrões e técnicas avançadas com Git e Github

- Regras importante para os branches
- CODEOWNERS
- Configuração do processo de Code
- Review
- Geração de Tags e Releases
- Bumb versioning
- Assinatura de commits
- Semantical versioning
- Conventional Commits

---

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

  - Abrir o arquivo `~/.gnupg/gpg.conf` e adicionar a linha: `use-agent` e salvar;

  - Executar o comando:

  - ```sh
    gpgconf --launch gpg-agent
    ```

## Pull Requests / Templates para PR

Criar o arquivo `PULL_REQUEST_TEMPLATE.md` no diretório `./.github`.

## Code Review

Plugin para VSCode: **_GitHub Pull Requests and Issues_**

## CODEOWNERS

Criar o arquivo `CODEOWNERS` no diretório `./.github`.

```sh
*.js @github_use_name # os arquivos com extensão .js serão revisados pelo usuário @github_use_name
.github/* @github_use_name # os arquivos do diretório .github serão revisados pelo usuário @github_use_name
*.ts @group-x @group-y # os arquivos com extensão .ts serão revisados pelos usuários do grupo @grupo-x e @group-y
```

## SemVer

Semantical Versioning
v: 2.1.4
(2) Major: Mudanças incompatíveis com a versão anterior
(1) Minor: Novas funcionalidades sem quebrar a compatibilidade
(4) Patch: Correção de bugs, ajustes de código, etc

Se a MAJOR = 0, então o projeto está em desenvolvimento e não é estável.

Referência: [SemVer](https://semver.org/lang/pt-BR/)

## Conventional Commits

Referência: [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)

- Opção 1: Utilizar a biblioteca [commitlint](https://commitlint.js.org/#/) para validar os commits no momento em que se realiza o commit. Necessário o [Husk](https://typicode.github.io/husky/#/) para automatizar o processo.

- Opção 2: Utilizar o [commitsar](https://github.com/aevea/commitsar)
Criar o container com o comando:

  ```sh
  docker run --rm --name="commitsar" -w /src -v "$(pwd):/src"  aevea/commitsar commitsar .
  ```

  É interessante usar como CI no GitHub Actions para garantir que os commits sejam compatíveis com o Conventional Commits.

- Opção 3: Utilizar o [commitizen](https://github.com/commitizen/cz-cli) para guiar, no terminal, a criação da mensagem do _commit_.
