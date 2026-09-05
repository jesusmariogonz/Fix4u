// Central icon exports for services & feature points, using lucide-react.
import {
  Layers,
  PaintBucket,
  Hammer,
  Zap,
  Cpu,
  Building2,
  Camera,
  Wind,
  Ruler,
  Sun,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";

export const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  pisos: Layers,
  pintura: PaintBucket,
  herreria: Hammer,
  electricidad: Zap,
  automatizaciones: Cpu,
  obraCivil: Building2,
  camaras: Camera,
  minisplits: Wind,
  carpinteria: Ruler,
  paneles: Sun,
};

export const aboutIcons = [Award, Clock, ShieldCheck];
