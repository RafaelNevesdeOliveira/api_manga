import express, { Application, Request, Response } from "express";
import database from "./infra/db";
import MangasController from "./controller/mangasController";

class StartUp {
  public app: Application;
  private _db: database = new database();

  constructor() {
    this.app = express();
    this._db.createConnection();
    this.routes();
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ version: "0.0.1" });
    });

    this.app
      .route("/api/v1/mangas/:page/:qtd")
      .get((req: Request, res: Response) => {
        return MangasController.get(req, res);
      });

    this.app
    .route("/api/v1/mangas/:id")
    .get((req: Request, res: Response) => {
      return MangasController.getById(req, res);
    });
  }
}

export default new StartUp();
