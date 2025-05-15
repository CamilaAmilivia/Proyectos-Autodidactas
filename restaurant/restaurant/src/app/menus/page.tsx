'use client';
import { withAuth } from '../components/withAuth';

const MenusPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl">Listado de Menús</h1>
      <ul className="mt-4 list-disc pl-4">
        <li>Pizza</li>
        <li>Ensalada</li>
        <li>Hamburguesa</li>
      </ul>
    </div>
  );
};

export default withAuth(MenusPage);