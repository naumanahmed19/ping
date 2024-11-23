export interface Category {
  id: number;
  title: string;
  createdAt: Date | null;
  parentId: number | null;
}
