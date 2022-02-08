import { Postagem } from "./Postagem"

export class Usuario {
    public email: string
    public nomeCompleto: string
    public foto: string
    public senha: string
    public token: string
    public tipo: string
    public postagens: Postagem[]
}