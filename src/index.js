import chalk from 'chalk'
import fs from 'fs'

function extraiLinks(texto) {
    const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.]*.[^\s]*)\)/gm
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : chalk.red('Nenhum link encontrado!')
}

async function pegaArquivo(caminho){
    try {
        const conteudo = await fs.promises.readFile(caminho, 'utf-8')
        return extraiLinks(conteudo)
    } catch (erro) {
        throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório!'))
    } 
}

export default pegaArquivo