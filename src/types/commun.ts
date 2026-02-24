export interface ParagraphType {
  id: number;
  text: string;
}

export interface VisitCardType {
  id: number;
  title: string;
  title_slug: string;
  image_url: string;
  price: number;
  paragraphs: ParagraphType[];
}

export interface VisitsType {
  id: number;
  duration: string;
  duration_slug: string;
  visitCardList: VisitCardType[];
}