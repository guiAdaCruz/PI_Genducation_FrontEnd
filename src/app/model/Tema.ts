
import { Postagem } from "./Postagem"

export class Tema{
    public idTema: number
    public tema: string
    public subtema: string
    public escolaridade: string
    public postagens: Postagem[]
}