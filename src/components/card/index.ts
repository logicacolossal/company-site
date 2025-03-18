import { CardContent } from "./content";
import { CardImage } from "./image";
import { CardLink } from "./link";
import { CardRoot } from "./root";
import { CardTitle } from "./title";

export const Card = Object.assign(CardRoot, { Title: CardTitle, Link: CardLink, Image: CardImage, Content: CardContent })