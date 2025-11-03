import dados from "../models/dados.js";
const { animes } = dados;


import * as universoModels from '../models/UNmodels.js'

export const listarTodos = async (req, res) =>  {
    try {
        const universos = await universoModels.encontreTodos();

            if (!universos || universos.length === 0){

         

        res.status(200).json({
            total: universos.lenght,
            message: 'lista de universos',
            bruxos
        });
    }

   res.status(200).json({
    total: universos.lenght,
    message: 'lista de universos',
    bruxos
   })
} catch (error) {
    res.status(500).json({
        erro: 'Erro interno de servidor',
        detalhes: error.message,
        status: 500
    })
}

}

export const listarUm = async (req,res) => {
    try{
        const id = parseInt(req.params.id);
        const universo = await universoModel.encontreUm(id);

        if (!universo){
           return res.status(200).json({
                erro: 'universo não encontrado',
                message: 'verifique o id do universos',
                id: id
            });
    }
    
    res.status(200).json({
        message: 'lista de universos',
        universo
       })

} catch (error) {
    res.status(500).json({
        erro: 'Erro interno de servidor',
        detalhes: error.message,
        status: 500
    })
 }
} 

const createuniverso = (req, res) => {
    const {nome, genero, criador, midia, cronologia, personagens, popularidade, ativo} = req.body;


    const generouniverso = ["Ação", "Fantasia Sombria", "Pós-apocalíptico", "Sobrenatural", "Aventura", "Super-herói", "Artes Marciais", "Suspense", "Mistério", "Comédia", "Slice of Life" ];

    if (!nome > 3) {
        return res.status(400).json({
            success: false,
            message: "O campo titulo é obrigatorio"
        });
    }
    if (!genero) {
        return res.status(400).json({
            success: false,
            message: "O campo genero é obrigatorio"
        });
    }
    if (!criador) {
        return res.status(400).json({
            success: false,
            message: "O campo estudio é obrigatorio"
        });
    }
    if (!midia) {
        return res.status(400).json({
            success: false,
            message: "O campo anolancamento é obrigatorio"
        });
    }
    if (cronologia) {
        return res.status(400).json({
            success: false,
            message: "O campo episodio é obrigatorio"
        });
    }
    if (!personagens) {
        return res.status(400).json({
            success: false,
            message: "O campo status é obrigatorio"
        });
    }
    if (!classificacao) {
        return res.status(400).json({
            success: false,
            message: "O campo calssificação é obrigatorio"
        });
    }
    if (!temporadas) {
        return res.status(400).json({
            success: false,
            message: "O campo temporada é obrigatorio"
        });
    }


    if (popularidade > 0) {
        return res.status(400).json({
            success: false,
            message: "O anime deve ter mais que um episodio"
        });
    }
    if (!ativo.includes(status)) {
        return res.status(400).json({
            success: false,
            message: `O `
        });}
    
const novouniverso = {
        id: animes.length + 1,
        nome,
        genero,
        criador,
        midia,
        personagens,
        temporadas,
        popularidade,
        ativo
    };

    universos.push(novouniverso);

    res.status(201).json({
        success: true,
        message: " novo universo cadastrado com sucesso",
        data: novouniverso
    });
}

const deleteuniverso = (req, res) => {
    const { id } =req.params;

    if(isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        });
    }

    const idParaApagar = parseInt(id);

    const universoParaRemover = universos.find(c => c.id !== idParaApagar);

    if (!universoParaRemover) {
        return res.status(404).json({
            success: false,
            message: "universo com esse id não existe"
        });
    }

    const universoFiltados = universos.filter(a => a.id !== idParaApagar);

    universos.splice(0, universos.length, ...universoFiltados);

    return res.status(200).json({
        success: true,
        message: "O universo foi removido com sucesso!"
    });
}

const updateuniverso = (req, res) => {
    const id = parseInt(req.params.id);
    const {nome, genero, criador, midia, personagens, temporadas, popularidade, ativo} = req.body;

    const generouniverso = ["Ação", "Fantasia Sombria", "Pós-apocalíptico", "Sobrenatural", "Aventura", "Super-herói", "Artes Marciais", "Suspense", "Mistério", "Comédia", "Slice of Life"];

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        });
    }

    const universoExiste = universos.find(c => c.id === id);

    if (!universoExiste) {
        return res.status(404).json({
            success: false,
            message: "universo não existe"
        });
    }

    if (temporadas <= 1) {
        return res.status(400).json({
            success: false,
            message: "O universo deve ter mais que 1 episodio "
        });
    }

    console.log(universo);

     const universoAtualizados = universos.map(universo => 
        universo.id === id
    ? {
        ...universo,
        ...universo(nome && { nome }),
        ...universo(genero && { genero }),
        ...universo(criador && { criador }),
        ...universo(midia && { midia }),
        ...universo(personagens && { personagens}),
        ...universo(popularidade && { popularidade }),
        ...universo(ativo && { ativo }),
        ...universo(temporadas && { temporadas })
    }
       :universo 
    );

    universos.splice(0, universos.length, ...universosAtualizados);

    const universosAtualizados = universos.find(c => c.id === id);

    res.status(200).json({
        success: true,
        message: "universo atualizado com sucesso",
        data: universoAtualizados
    });
}

export {getAlluniverso, getuniversoById, createuniverso, deleteuniverso, updateuniverso};