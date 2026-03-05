import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="w-16 h-16 text-destructive" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold font-serif text-foreground">404</h1>
          <h2 className="text-xl font-semibold font-sans text-foreground">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground font-sans text-sm">
            Parece que la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <Link to="/" className="block">
          <Button className="w-full font-sans font-medium">
            Volver a la página principal
          </Button>
        </Link>
      </div>
    </div>
  );
}
