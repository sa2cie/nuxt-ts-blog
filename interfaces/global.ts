export interface IGlobalState {
  global: {
    breadcrumbs: IBreadCrumb[];
    sidebar: ISidebar;
  }
}

export interface IBreadCrumb {
  text: string;
  disabled: boolean;
  href: string;
}

export interface ISidebar {
  relatedEntries: IRelatedEntries,
}

export interface IRelatedEntries {
  entries: IMediaData[],
  limit: number,
  loading: boolean
}

export interface IMediaData {
  id : string;
  title : string;
  description : string;
  image : string;
}
