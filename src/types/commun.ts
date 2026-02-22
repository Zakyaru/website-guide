export interface Paragraph {
  id: number;
  text: string;
}

export interface Visit {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  price: number;
  duration?: string;
  paragraphs?: Paragraph[];
}