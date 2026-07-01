import { BadgeType } from "@/types/learning";

export type EarnedBadgeType = Exclude<BadgeType, "repeat">;

export type BadgeInfo = {
  type: EarnedBadgeType;
  title: string;
  description: string;
  image: string;
};

export const ONEDRIVE_BADGES: Record<EarnedBadgeType, BadgeInfo> = {
  gold: {
    type: "gold",
    title: "OneDrive Oro",
    description: "Obtenida al responder correctamente las 10 preguntas de la evaluación final.",
    image: "/badges/onedrive-oro.png",
  },
  silver: {
    type: "silver",
    title: "OneDrive Plata",
    description: "Obtenida al responder correctamente 8 o 9 preguntas de la evaluación final.",
    image: "/badges/onedrive-plata.png",
  },
  bronze: {
    type: "bronze",
    title: "OneDrive Bronce",
    description: "Obtenida al responder correctamente 7 preguntas de la evaluación final.",
    image: "/badges/onedrive-bronce.png",
  },
};

export function getOneDriveBadgeInfo(badge: string | null): BadgeInfo | null {
  if (badge === "gold" || badge === "silver" || badge === "bronze") {
    return ONEDRIVE_BADGES[badge];
  }

  return null;
}
