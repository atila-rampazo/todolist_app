import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";
import TipoFiltro from "../model/TipoFiltro";

const tarefasIniciais: Tarefa[] = []


export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM)