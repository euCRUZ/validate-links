# Validate Links

## Descrição

Este projeto é uma ferramenta de linha de comando Node.js que processa um caminho de arquivo ou diretório fornecido. Ele verifica se o caminho é válido, lê o arquivo ou diretório e imprime uma lista de links encontrados. Se a flag `--valida` for fornecida, ele valida os links antes de imprimir. A saída é codificada em cores usando a biblioteca `chalk`. A função `pegaArquivo` é usada para ler o arquivo ou diretório, e a função `listaValidada` é usada para validar os links.

## Uso

Para usar esta ferramenta, você pode instalar globalmente usando npm:

```bash
npm install -g validate-links
```

Em seguida, você pode usar a ferramenta da seguinte maneira:

```cmd
validate-links <caminho> [--valida]
```

Onde <caminho> é o caminho para o arquivo ou diretório que você deseja processar, e --valida é uma flag opcional que, se fornecida, fará com que a ferramenta valide os links antes de imprimi-los.
