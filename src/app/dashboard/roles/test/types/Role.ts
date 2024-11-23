export interface Permission {
  id: number;
  title: string;
}
export interface Role {
  id: number;
  title: string;
  permissions: Permission[];
}
