import { FaUser } from "react-icons/fa";

interface UsuariosProps {
  usuarios: string[];
}

export function Usuarios({ usuarios }: UsuariosProps) {
  return (
    <section className="min-h-screen p-10 bg-blue-100" id="usuarios">
      <h2 className="text-3xl font-bold mb-4">Usuários</h2>
      <ul>
        {usuarios.map((u, i) => (
          <li key={i} className="flex items-center gap-2">
            <FaUser /> {u}
          </li>
        ))}
      </ul>
    </section>
  );
}
