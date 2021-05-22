import { Mangas } from "./../models/mangas";
import { IMangasService } from "./../contracts/iMangasService";
import { Result } from "./../infra/result";
import { MangasRepository } from "./../repository/mangasRepository";

export class MangasService implements IMangasService {
  async get(_id: string): Promise<Mangas> {
    let result = await MangasRepository.findById(_id);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<Mangas>> {
    let result = new Result<Mangas>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await MangasRepository.count({});
    result.Data = await MangasRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }
}
