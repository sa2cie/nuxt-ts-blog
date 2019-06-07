export interface IPostState {
  data: IPostData;
  loading: boolean;
}

export interface IPostData {
  id : string;
  title : string;
  category : string;
  description : string;
  body : any;
  image : string;
  thumb : string;
  date : string;
}
