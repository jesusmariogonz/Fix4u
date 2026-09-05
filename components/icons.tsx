// Central icon exports for services & feature points, using lucide-react.
import {
  Zap,
  Cpu,
  Camera,
  Wind,
  Ruler,
  Sun,
} from "lucide-react";

// Only the services with no matching real photo get a small accent icon;
// the four with real project photos (pisos, pintura, herreria, obraCivil)
// render photo-first with no icon at all.
export const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  electricidad: Zap,
  automatizaciones: Cpu,
  camaras: Camera,
  minisplits: Wind,
  carpinteria: Ruler,
  paneles: Sun,
};

// Real client project photo used for services with a plausible visual match.
// Reused tastefully from the same pool already featured in Hero/Gallery.
export const serviceImages: Record<string, string> = {
  pisos: "/images/gallery/project-img-013.jpg",
  pintura: "/images/gallery/project-img-025.jpg",
  herreria: "/images/gallery/project-img-021.jpg",
  obraCivil: "/images/gallery/project-img-026.jpg",
};

// Distinct brand-palette gradients (blue #0B4C8C, dark, gold #D4AF37, red
// accent) for the services without a real matching photo, so each card is
// visually distinguishable even without a photo.
export const serviceGradients: Record<string, string> = {
  electricidad: "linear-gradient(135deg, #0B4C8C 0%, #062a4d 60%, #D4AF37 130%)",
  automatizaciones: "linear-gradient(160deg, #0a0a0a 0%, #0B4C8C 75%)",
  camaras: "linear-gradient(200deg, #0B4C8C 0%, #0a0a0a 55%, #7a1414 140%)",
  minisplits: "linear-gradient(120deg, #062a4d 0%, #0B4C8C 50%, #1b6ea8 100%)",
  carpinteria: "linear-gradient(150deg, #3a2410 0%, #0a0a0a 60%, #D4AF37 140%)",
  paneles: "linear-gradient(145deg, #0a0a0a 0%, #0B4C8C 45%, #D4AF37 110%)",
};
