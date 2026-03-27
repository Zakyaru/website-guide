export interface ParagraphType {
  id: number;
  text: string;
}

export interface VisitCardType {
  id: number;
  title: string;
  title_slug: string;
  image_url: string;
  price?: string;
  price_description?: string;
  paragraphs: ParagraphType[];
}

export interface VisitsType {
  id: number;
  duration: string;
  duration_slug: string;
  description?: ParagraphType[];
  specifications?: ParagraphType[];
  visitCardList: VisitCardType[];
}