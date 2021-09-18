import { addNewTask, changeStatusTask } from "../service";
export default class Tarefa {
    #id: number
    #descricao: string
    #concluida: boolean

    constructor(id: number, descricao: string, concluida = false) {
        this.#id = id
        this.#descricao = descricao
        this.#concluida = concluida
    }

    get id() {
        return this.#id
    }
    get descricao() {
        return this.#descricao
    }
    get concluida() {
        return this.#concluida
    }

    get ativa() {
        return !this.concluida
    }
    static adicionarTarefa(novaTarefa: Tarefa) {
        addNewTask(novaTarefa);
    }
    static criarAtiva(id: number, descricao: string) {
        return new Tarefa(id, descricao)
    }

    static criarConcluida(id: number, descricao: string) {

        return new Tarefa(id, descricao, true)
    }

    static converteParaTarefa(tarefas: any): Tarefa[] {
        let novasTarefas = tarefas.map((tarefa) => {
            return new Tarefa(tarefa.id, tarefa.task, tarefa.finish)
        })
        return novasTarefas;
    }
    alternarStatus() {
        return this.concluida ? this.ativar() : this.concluir()
    }
    concluir() {
        changeStatusTask(this.id, true);
        return Tarefa.criarConcluida(this.id, this.descricao)
    }
    ativar() {
        changeStatusTask(this.id, false);
        return Tarefa.criarAtiva(this.id, this.descricao);
    }
}