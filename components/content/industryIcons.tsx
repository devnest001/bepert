import type { ReactNode } from "react";
import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
} from "lucide-react";

export const industryIcons: Record<string, ReactNode> = {
  "financial-services": <Landmark className="h-5 w-5" aria-hidden="true" />,
  healthcare: <HeartPulse className="h-5 w-5" aria-hidden="true" />,
  retail: <ShoppingBag className="h-5 w-5" aria-hidden="true" />,
  education: <GraduationCap className="h-5 w-5" aria-hidden="true" />,
  logistics: <Truck className="h-5 w-5" aria-hidden="true" />,
  "professional-services": (
    <Building2 className="h-5 w-5" aria-hidden="true" />
  ),
  startups: <Factory className="h-5 w-5" aria-hidden="true" />,
};
