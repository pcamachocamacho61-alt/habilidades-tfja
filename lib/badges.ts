import { BadgeType } from "@/types/learning";

export type BadgeInfo = {
  type: BadgeType;
  title: string;
  description: string;
  image: string;
};

export const ONEDRIVE_BADGES: Record<BadgeType, BadgeInfo> = {
  gold: {
    type: "gold",
    title: "OneDrive Oro",
    description:
      "Dominio sobresaliente de OneDrive. Obtenida al responder correctamente las 10 preguntas en el primer intento.",
    image: "/badges/onedrive-oro.png",
  },
  silver: {
    type: "silver",
    title: "OneDrive Plata",
    description:
      "Dominio sólido de OneDrive. Obtenida al responder 8 o 9 preguntas correctamente.",
    image: "/badges/onedrive-plata.png",
  },
  bronze: {
    type: "bronze",
    title: "OneDrive Bronce",
    description:
      "Ruta aprobada. Obtenida al responder al menos 7 preguntas correctamente.",
    image: "/badges/onedrive-bronce.png",
  },
};

export function getOneDriveBadgeInfo(badge: string | null): BadgeInfo | null {
  if (badge === "gold" || badge === "silver" || badge === "bronze") {
    return ONEDRIVE_BADGES[badge];
  }

  return null;
}