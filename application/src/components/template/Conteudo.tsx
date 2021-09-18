interface ConteudoProps {
  children: any;
}
export default function Conteudo(props: ConteudoProps) {
  return <div className="flex flex-1 justify-center">{props.children}</div>;
}
