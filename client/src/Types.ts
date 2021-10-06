export type InitialState = {
  items: Item[];
};
export type Comments_type = {
  key: string;
  username: string;
  avatar: string;
  user_id: string;
  comment: string;
  replies?: any;
};

export type Replies = {
  key: string;
  username: string;
  avatar: string;
  user_id: string;
  comment: string;
};
export type Item = {
  _id: string;
  username: string;
  link: string;
  title: string;
  detail: string;
  category: string;
  comments: Comments_type[] | any;
  vote: number;
  voted?: boolean;
  status: string;
};

export type RootState = {
  sorts: string;
  filters: string;
  feedbacks: InitialState;
  items: Item[];
};

export type SetState = {
  setCountSuggetions: Function;
};
