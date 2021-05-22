import {Document} from 'mongoose'

export abstract class Core extends Document{
    titulo: String;
    autor: String;
    genero: Array<String>;
    descricao: String;
    imagem: String;
    link: String;
    ativo: Boolean
}