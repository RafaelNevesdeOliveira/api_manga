"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangasRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MangasSchema = new mongoose_1.default.Schema({
    titulo: { type: String },
    autor: { type: String },
    genero: { type: String },
    descricao: { type: String },
    imagem: { type: String },
    link: { type: String },
    ativo: { type: Boolean },
    capitulo: { type: Number }
});
exports.MangasRepository = mongoose_1.default.model("mangas", MangasSchema);
