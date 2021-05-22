"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./infra/db"));
const mangasController_1 = __importDefault(require("./controller/mangasController"));
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this.app = express_1.default();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ version: "0.0.1" });
        });
        this.app
            .route("/api/v1/mangas/:page/:qtd")
            .get((req, res) => {
            return mangasController_1.default.get(req, res);
        });
        this.app
            .route("/api/v1/mangas/:id")
            .get((req, res) => {
            return mangasController_1.default.getById(req, res);
        });
    }
}
exports.default = new StartUp();
