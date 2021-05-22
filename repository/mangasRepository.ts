import mongoose from "mongoose";
import {Mangas} from '../models/mangas'

const MangasSchema = new mongoose.Schema<Mangas>({
    titulo: { type: String },
    autor: { type: String },
    genero: { type: String },
    descricao: { type: String },
    imagem: { type: String },
    link: { type: String },
    ativo: { type: Boolean },
    capitulo: { type: Number }
})

export const MangasRepository = mongoose.model<Mangas>("mangas", MangasSchema);