import { FaStethoscope } from "react-icons/fa";

interface EspecialistasProps {
  especialistas: string[];
}

export function Especialistas({ especialistas }: EspecialistasProps) {
  return (
    <section className="min-h-screen p-10 bg-green-100" id="especialistas">
      <h2 className="text-3xl font-bold mb-4">Especialistas</h2>
      <ul>
        {especialistas.map((e, i) => (
          <li key={i} className="flex items-center gap-2">
            <FaStethoscope /> {e}
          </li>
        ))}
      </ul>
    </section>
  );
}
