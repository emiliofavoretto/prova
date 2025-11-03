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
    const {titulo, genero, estudio, anoLancamento, episodios, status, classificacao, temporadas} = req.body;


    const generoAnime = ["Ação", "Fantasia Sombria", "Pós-apocalíptico", "Sobrenatural", "Aventura", "Super-herói", "Artes Marciais", "Suspense", "Mistério", "Comédia", "Slice of Life" ];

    if (!titulo) {
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
    if (!estudio) {
        return res.status(400).json({
            success: false,
            message: "O campo estudio é obrigatorio"
        });
    }
    if (!anoLancamento) {
        return res.status(400).json({
            success: false,
            message: "O campo anolancamento é obrigatorio"
        });
    }
    if (episodios) {
        return res.status(400).json({
            success: false,
            message: "O campo episodio é obrigatorio"
        });
    }
    if (!status) {
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


    if (episodios > 0) {
        return res.status(400).json({
            success: false,
            message: "O anime deve ter mais que um episodio"
        });
    }
    if (!status.includes(status)) {
        return res.status(400).json({
            success: false,
            message: `O `
        });