function extraiLinks(arrLinks) {
    return arrLinks.map(objetoLink => Object.values(objetoLink).join())
}

function manejaErros(erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'Link não encontrado'
    } else {
        return 'Ocorreu algum erro'
    }
}

async function verificaStatus (listaURLs) {
    const arrayStatus = await Promise.all(
        listaURLs.map(async url =>  {
            try {
                const response = await fetch(url)	
                return response.status
            } catch (erro) {
                return manejaErros(erro)
            }
        }))
    return arrayStatus
}

export default async function listaValidada(listaDeLinks) {
    const links = extraiLinks(listaDeLinks)
    const status = await verificaStatus(links)
    
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}
