#!/usr/bin/env node
import chalk from 'chalk'
import fs from 'fs'
import pegaArquivo from './index.js'
import listaValidada from './httpValidacao.js'

const caminho = process.argv

async function imprimiLista(valida, resultado, identificador = '') {
    if (valida) {
        console.log(
            chalk.green('Lista validada'), 
            chalk.black.bgGreen(identificador), 
            await listaValidada(resultado))    
    } else {
        console.log(
            chalk.green('Lista de links'), 
            chalk.black.bgGreen(identificador),
            chalk.blueBright(JSON.stringify(resultado, null, 2)))
    }
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2]
    const valida = argumentos[3] === '--valida'

    try {
        fs.lstatSync(caminho)
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log(chalk.red('Arquivo ou diretório não encontrado!'))
            return
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho)
        imprimiLista(valida, resultado)
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async nomeDeArquivo => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimiLista(valida, lista, nomeDeArquivo)
        })
    } 
}

processaTexto(caminho)