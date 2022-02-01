import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public titulo: string
    public postagem: string
    public subtema: string
    public escolaridade: string
    public date: Date
    public subtema: string
    public escolaridade: string
    public urlImg: string
    public tema: Tema
    public usuario: Usuario
}