import { FaCalendarAlt } from "react-icons/fa";

interface AtendimentosProps {
  atendimentos: string[];
}

export function Atendimentos({ atendimentos }: AtendimentosProps) {
  return (
    <section className="min-h-screen p-10 bg-yellow-100" id="atendimentos">
      <h2 className="text-3xl font-bold mb-4">Atendimentos</h2>
      <ul>
        {atendimentos.map((a, i) => (
          <li key={i} className="flex items-center gap-2">
            <FaCalendarAlt /> {a}
          </li>
        ))}
      </ul>
    </section>
  );
}
