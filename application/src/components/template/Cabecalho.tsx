interface CabecalhoProps {
  children: any;
}
export default function Cabecalho(props: CabecalhoProps) {
  return (
    <div className="flex h-1/3 bg-img-tarefas bg-no-repeat bg-cover bg-center">
      <div
        className={`h-full flex flex-1 justify-center items-center bg-gradient-to-r from-purple-600 via-transparent to-blue-600`}
      >
        {props.children}
      </div>
    </div>
  );
}
