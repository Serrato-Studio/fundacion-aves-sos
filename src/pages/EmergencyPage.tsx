import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlertCircle } from 'lucide-react';

interface FormData {
  nombre: string;
  mayoriaEdad: string;
  localidad: string;
  barrio: string;
  estadoAve: string;
  descripcion: string;
}

const LOCALIDADES_BOGOTA = [
  'Usaquén',
  'Chapinero',
  'Santa Fe',
  'San Cristóbal',
  'Usme',
  'Tunjuelito',
  'Bosa',
  'Kennedy',
  'Fontibón',
  'Engativá',
  'Suba',
  'Barrios Unidos',
  'Teusaquillo',
  'Los Mártires',
  'Antonio Nariño',
  'Puente Aranda',
  'La Candelaria',
  'Rafael Uribe Uribe',
  'Ciudad Bolívar',
  'Sumapaz',
];

const BARRIOS_POR_LOCALIDAD: Record<string, string[]> = {
  Usaquén: [
    'Cedritos',
    'Santa Bárbara',
    'Usaquén (Casco)',
    'San Cristóbal Norte',
    'Toberín',
  ],
  Chapinero: [
    'El Chicó',
    'Rosales',
    'Chapinero Alto',
    'Pardo Rubio',
    'Antiguo Country',
  ],
  'Santa Fe': [
    'La Perseverancia',
    'Las Nieves',
    'La Macarena',
    'Laches',
    'El Consuelo',
  ],
  'San Cristóbal': [
    '20 de Julio',
    'San Blas',
    'Suramérica',
    'La Victoria',
    'Altos del Zuque',
  ],
  Usme: [
    'Usme Centro',
    'Alfonso López',
    'Santa Librada',
    'Yomasa',
    'El Virrey',
  ],
  Tunjuelito: [
    'Tunjuelito',
    'Venecia',
    'San Benito',
    'El Carmen',
    'Abraham Lincoln',
  ],
  Bosa: [
    'Bosa Centro',
    'El Recreo',
    'Piamonte',
    'San Bernardino',
    'Metrovivienda',
  ],
  Kennedy: [
    'Castilla',
    'Marsella',
    'Patio Bonito',
    'Timiza',
    'Carvajal',
    'Américas',
  ],
  Fontibón: [
    'Modelia',
    'Hayuelos',
    'Fontibón Centro',
    'Ciudad Salitre Occidente',
    'Villa del Río',
  ],
  Engativá: [
    'Villas de Granada',
    'Quirigua',
    'Gararcés Navas',
    'Luján',
    'Santa Helenita',
  ],
  Suba: [
    'Niza',
    'Colina Campestre',
    'Prado Veraniego',
    'Rincón de Suba',
    'Lombardía',
  ],
  'Barrios Unidos': [
    'Siete de Agosto',
    'La Castellana',
    'Metrópolis',
    'Polo Club',
    'Alcázares',
  ],
  Teusaquillo: [
    'La Soledad',
    'Galerías',
    'Quinta Paredes',
    'Ciudad Salitre Oriental',
    'Pablo VI',
  ],
  'Los Mártires': [
    'Voto Nacional',
    'La Estanzuela',
    'Santa Isabel',
    'Eduardo Santos',
  ],
  'Antonio Nariño': ['Restrepo', 'Santander', 'Ciudad Jardín Sur', 'La Fragua'],
  'Puente Aranda': [
    'Ciudad Montes',
    'Muzú',
    'Alquería',
    'Puente Aranda Centro',
    'Milenta',
  ],
  'La Candelaria': ['Centro Histórico', 'Egipto', 'Concordia', 'Belén'],
  'Rafael Uribe Uribe': [
    'Olavaya',
    'Quiroga',
    'Marruecos',
    'Diana Turbay',
    'Claret',
  ],
  'Ciudad Bolívar': [
    'Madelena',
    'Arborizadora Alta',
    'Sierra Morena',
    'El Tesoro',
    'Meissen',
  ],
  Sumapaz: ['San Juan', 'Nazareth', 'Betania', 'La Unión'],
};

const ESTADOS_AVE = [
  'Herida',
  'Pichón caído del nido',
  'Choque contra ventanal',
  'Atrapada',
];

const WHATSAPP_NUMBER = '573123941005';

export default function EmergencyPage() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    mayoriaEdad: '',
    localidad: '',
    barrio: '',
    estadoAve: '',
    descripcion: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filteredLocalidades, setFilteredLocalidades] = useState<string[]>([]);
  const [showLocalidades, setShowLocalidades] = useState(false);
  const [filteredBarrios, setFilteredBarrios] = useState<string[]>([]);
  const [showBarrios, setShowBarrios] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocalidadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleSelectChange('localidad', value);

    if (value) {
      const filtered = LOCALIDADES_BOGOTA.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocalidades(filtered);
      setShowLocalidades(true);
    } else {
      setShowLocalidades(false);
    }
  };

  const selectLocalidad = (localidad: string) => {
    handleSelectChange('localidad', localidad);
    setShowLocalidades(false);
    // Limpiar barrio cuando cambia la localidad
    handleSelectChange('barrio', '');
    setShowBarrios(false);
  };

  const handleBarrioInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleSelectChange('barrio', value);

    if (formData.localidad && value) {
      const barriosDisponibles =
        BARRIOS_POR_LOCALIDAD[formData.localidad] || [];
      const filtered = barriosDisponibles.filter((barrio) =>
        barrio.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredBarrios(filtered);
      setShowBarrios(true);
    } else {
      setShowBarrios(false);
    }
  };

  const selectBarrio = (barrio: string) => {
    handleSelectChange('barrio', barrio);
    setShowBarrios(false);
  };

  const buildWhatsAppMessage = (): string => {
    const message = `*REPORTE DE AVE EN EMERGENCIA*
    *Información de contacto:*
    Nombre completo: ${formData.nombre}
    ¿Mayor de edad?: ${formData.mayoriaEdad}
    *Ubicación:*
    Localidad: ${formData.localidad}
    Barrio: ${formData.barrio}
    *Estado del ave:*
    Condición: ${formData.estadoAve}
    *Detalles adicionales:*
    ${formData.descripcion}
    ---
    Reporte enviado desde la plataforma de Fundación Aves S.O.S`;
    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nombre ||
      !formData.mayoriaEdad ||
      !formData.localidad ||
      !formData.barrio ||
      !formData.estadoAve ||
      !formData.descripcion
    ) {
      alert('Por favor completa todos los campos');
      return;
    }

    setIsSubmitting(true);

    try {
      const message = buildWhatsAppMessage();
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');

      // Reset form
      setFormData({
        nombre: '',
        mayoriaEdad: '',
        localidad: '',
        barrio: '',
        estadoAve: '',
        descripcion: '',
      });
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-destructive" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              S.O.S: Ave en Emergencia
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            ¿Encontraste un ave herida o en peligro? Reporta lo que viste y nos
            comunicaremos contigo de inmediato.
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-border/60 bg-background/50">
          <CardHeader>
            <CardTitle>Información del Reporte</CardTitle>
            <CardDescription>
              Completa todos los campos para que podamos ayudar lo antes
              posible.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre Completo */}
              <div className="space-y-2">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-foreground"
                >
                  👤 Nombre Completo
                </label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre completo (Ej: Juan Pérez)"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="bg-background/80"
                  required
                />
              </div>

              {/* Mayoría de Edad */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-foreground">
                  🔞 ¿Eres mayor de edad?
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mayoriaEdad"
                      value="sí"
                      checked={formData.mayoriaEdad === 'sí'}
                      onChange={() => handleSelectChange('mayoriaEdad', 'sí')}
                      className="w-4 h-4 cursor-pointer"
                      required
                    />
                    <span className="text-sm text-foreground">
                      Sí, soy mayor de 18 años
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mayoriaEdad"
                      value="no"
                      checked={formData.mayoriaEdad === 'no'}
                      onChange={() => handleSelectChange('mayoriaEdad', 'no')}
                      className="w-4 h-4 cursor-pointer"
                      required
                    />
                    <span className="text-sm text-foreground">
                      No, soy menor de 18 años
                    </span>
                  </label>
                </div>
              </div>

              <div className="space-y-2 relative">
                <label
                  htmlFor="localidad"
                  className="block text-sm font-semibold text-foreground"
                >
                  📍 Localidad de Bogotá
                </label>
                <Input
                  id="localidad"
                  type="text"
                  placeholder="Escribe para buscar tu localidad..."
                  value={formData.localidad}
                  onChange={handleLocalidadInput}
                  onFocus={() => formData.localidad && setShowLocalidades(true)}
                  className="bg-background/80"
                  required
                />

                {/* Dropdown de localidades filtradas */}
                {showLocalidades && filteredLocalidades.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                    {filteredLocalidades.map((localidad) => (
                      <button
                        key={localidad}
                        type="button"
                        onClick={() => selectLocalidad(localidad)}
                        className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-foreground text-sm"
                      >
                        {localidad}
                      </button>
                    ))}
                  </div>
                )}

                {/* Mensaje cuando no hay resultados */}
                {showLocalidades &&
                  formData.localidad &&
                  filteredLocalidades.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-md shadow-lg z-10 p-3 text-center text-sm text-muted-foreground">
                      No se encontró la localidad
                    </div>
                  )}
              </div>

              {/* Barrio */}
              <div className="space-y-2 relative">
                <label
                  htmlFor="barrio"
                  className="block text-sm font-semibold text-foreground"
                >
                  🏘️ Barrio
                </label>
                <Input
                  id="barrio"
                  name="barrio"
                  type="text"
                  placeholder={
                    formData.localidad
                      ? 'Escribe para buscar tu barrio...'
                      : 'Primero selecciona una localidad'
                  }
                  value={formData.barrio}
                  onChange={handleBarrioInput}
                  onFocus={() =>
                    formData.localidad &&
                    formData.barrio &&
                    setShowBarrios(true)
                  }
                  className="bg-background/80"
                  disabled={!formData.localidad}
                  required
                />

                {/* Dropdown de barrios filtrados */}
                {showBarrios && filteredBarrios.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                    {filteredBarrios.map((barrio) => (
                      <button
                        key={barrio}
                        type="button"
                        onClick={() => selectBarrio(barrio)}
                        className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-foreground text-sm"
                      >
                        {barrio}
                      </button>
                    ))}
                  </div>
                )}

                {/* Mensaje cuando no hay resultados */}
                {showBarrios &&
                  formData.barrio &&
                  filteredBarrios.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-md shadow-lg z-10 p-3 text-center text-sm text-muted-foreground">
                      No se encontró el barrio en {formData.localidad}
                    </div>
                  )}

                {/* Mensaje cuando no hay localidad seleccionada */}
                {!formData.localidad && (
                  <p className="text-xs text-muted-foreground">
                    ⚠️ Selecciona una localidad primero
                  </p>
                )}
              </div>

              {/* Estado del Ave */}
              <div className="space-y-2">
                <label
                  htmlFor="estadoAve"
                  className="block text-sm font-semibold text-foreground"
                >
                  🐦 ¿Cuál es el estado del ave?
                </label>
                <Select
                  value={formData.estadoAve}
                  onValueChange={(value) =>
                    handleSelectChange('estadoAve', value)
                  }
                >
                  <SelectTrigger className="bg-background/80">
                    <SelectValue placeholder="Selecciona el estado del ave" />
                  </SelectTrigger>
                  <SelectContent>
                    {ESTADOS_AVE.map((estado) => (
                      <SelectItem key={estado} value={estado}>
                        {estado}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Descripción */}
              <div className="space-y-2">
                <label
                  htmlFor="descripcion"
                  className="block text-sm font-semibold text-foreground"
                >
                  📝 Descripción detallada
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  placeholder="Describe qué viste: ¿Dónde está el ave? ¿Qué tipo de ave es? ¿Cuál es su aspecto? Cualquier detalle es importante."
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  rows={5}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? 'Enviando...' : '🚨 Reportar a WhatsApp'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Section */}
        <Card className="mt-8 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">
                ℹ️ Información importante
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • Se abrirá tu aplicación de WhatsApp para enviar el reporte
                  directamente a nuestro equipo.
                </li>
                <li>
                  • Responderemos lo más rápido posible según la gravedad de la
                  situación.
                </li>
                <li>
                  • Por favor, no manipules al ave. Colócala en un lugar seguro
                  y resguardado.
                </li>
                <li>
                  • Si es un pichón caído, verifica que no esté herido. En
                  algunos casos, es mejor dejarlo para que sus padres lo críen.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
