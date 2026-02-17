import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-full border-0 bg-transparent shadow-none">
        <CardContent className="py-20 md:py-32 px-4">
          <div className="container mx-auto text-center max-w-2xl">
            <div className="mb-6 flex justify-center">
              <Badge
                variant="outline"
                className="px-4 py-2 border-primary/20 bg-primary/5 text-xs font-semibold text-primary gap-2"
              >
                <span className="animate-pulse h-2 w-2 rounded-full bg-primary inline-block" />
                PRÓXIMAMENTE
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-foreground">
              <span className="font-serif">Estrenamos</span>
              <br />
              <span className="font-mono text-primary">página</span>{' '}
              <span className="font-sans">web</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Estamos preparando algo especial para ti. Una plataforma
              completamente rediseñada para conectar, informar y tomar acción
              por la conservación de nuestras aves.
            </p>

            <Button size="lg" variant="outline">
              <a
                href="https://www.instagram.com/avessosbogota/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir en redes
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
