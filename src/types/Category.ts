interface Category {
  id: number;
  title: string;
  created_at: Date;
  parentId: number | null;
}
