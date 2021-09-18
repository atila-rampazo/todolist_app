import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";
import TipoFiltro from "../model/TipoFiltro";

let baseUrl = 'http://api.todolist.local/api/tasks';
const getAllTasks = async () => {
    const request = await fetch(baseUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    const response = await request.json();
    let tarefas = Tarefa.converteParaTarefa(response.data);
    return new ListaTarefas(tarefas, TipoFiltro.NENHUM);
}
const addNewTask = async (tarefa: Tarefa) => {
    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            task: tarefa.descricao
        })
    })
}
const changeStatusTask = async (taskId: number, finish: boolean) => {
    await fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            finish: finish
        })
    })
}
export { getAllTasks, addNewTask, changeStatusTask }