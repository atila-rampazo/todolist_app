import ListaTarefas from "../../model/ListaTarefas";
import ListaBotao from "./ListaBotao";
import ListaItem from "./ListaItem";
import ListaRodape from "./ListaRodape";

interface ListaProps {
  tarefas: ListaTarefas;
  mudou: (tarefas: ListaTarefas) => void;
}
export default function Lista(props: ListaProps) {
  const { tarefas } = props;
  const renderizarTarefas = () => {
    return tarefas.items?.map((tarefa) => {
      return (
        <ListaItem
          key={tarefa.id}
          valor={tarefa.descricao}
          concluido={tarefa.concluida}
          alterarStatus={() => {
            const tarefaModificada = tarefa.alternarStatus();
            const novaLista = tarefas.modificarTarefa(tarefaModificada);
            props.mudou(novaLista);
          }}
        />
      );
    });
  };
  return (
    <div className={`flex w-3/5 items-start relative`}>
      <ul
        className={`w-full list-none bg-white shadow-lg rounded-lg text-black absolute -top-14`}
      >
        {renderizarTarefas()}
        <ListaRodape tarefas={props.tarefas} mudou={props.mudou} />
      </ul>
    </div>
  );
}
