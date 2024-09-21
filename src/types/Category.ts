export interface Category {
  id: number;
  title: string;
  createdAt: Date;
  parentId: number | null;
}
