import { useEffect, useState } from "react";
import Formulario from "../components/formulario/Formulario";
import Lista from "../components/lista/Lista";
import Cabecalho from "../components/template/Cabecalho";
import Conteudo from "../components/template/Conteudo";
import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";
import { getAllTasks } from "../service";
const Home = () => {
  const [tarefas, setTarefas] = useState<ListaTarefas>();
  useEffect(() => {
    const consutTasks = async () => {
      let tasks = await getAllTasks();
      setTarefas(tasks);
      return tasks;
    };

    consutTasks();
  }, []);
  async function novaTarefaCriada(novaTarefa: Tarefa) {
    Tarefa.adicionarTarefa(novaTarefa);
    let tasks = await getAllTasks();

    setTarefas(tasks);
  }
  return (
    <div
      className={`
    flex flex-col
    bg-gray-300
    h-screen
    `}
    >
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada} />
      </Cabecalho>
      <Conteudo>
        {tarefas ? (
          <Lista
            tarefas={tarefas}
            mudou={(novasTarefas) => {
              setTarefas(novasTarefas);
            }}
          />
        ) : (
          <h4 className="text-xl font-medium mt-4">Consultando Tarefas</h4>
        )}
      </Conteudo>
    </div>
  );
};

export default Home;
