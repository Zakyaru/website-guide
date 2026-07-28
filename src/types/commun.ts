export interface ParagraphType {
  id: number;
  text: string;
}

export interface ImageType {
  id: number;
  image_url: string;
}

export interface VisitCardType {
  id: number;
  title: string;
  title_slug: string;
  main_image_url: string;
  price?: string;
  price_description?: string;
  images: ImageType[];
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