
export interface IListState {
  latestPosts: ILatestPosts;
  pagination: IPagination;
}

export interface ILatestPosts {
  posts: any[];
  total: number;
  limit: number
  loading: boolean;
}

export interface IPagination {
  current: number;
}
