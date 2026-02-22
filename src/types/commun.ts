export interface Paragraph {
  id: number;
  text: string;
}

export interface Visit {
  id: number;
  duration: string;
  title: string;
  slug: string;
  image_url: string;
  price: number;
  paragraphs: Paragraph[];
}