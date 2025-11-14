export enum BookStatus {
  UNREAD = "На начато",
  IN_PROGRESS = "В процессе",
  DONE = "Завершено",
}

export interface IBook {
  id: string;
  title: string;
  description: string;
  author: string;
  year: string;
  pages: string;
  status: BookStatus;
}
