import Head from "next/head";
import { Usuarios } from"../components/Usuarios";
import { Especialistas } from "../components/Especialistas";
import { Atendimentos } from "../components/Atendimentos";

const usuarios = ["Maria", "João", "Carlos"];
const especialistas = ["Psicóloga Ana", "Terapeuta Luiz"];
const atendimentos = ["Consulta 1", "Sessão 2", "Consulta 3"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Saúde Mental</title>
      </Head>
      <main className="font-sans text-gray-800 scroll-smooth">
        <Usuarios usuarios={usuarios} />
        <Especialistas especialistas={especialistas} />
        <Atendimentos atendimentos={atendimentos} />
      </main>
    </>
  );
}
