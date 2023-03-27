export interface IGridTwoColumn {
  imgUrl: string
  text: string
  title: string
}

export interface IGridContent {
  text: string
  title: string
}
export interface IGridText {
  description: string
  title: string
  contents: {
    description: string
  }[]
}

export interface IGridImage {
  description: string
  title: string
  images: {
    src: string
    id: string
  }[]
}

export interface ILinks {
  link: string
  children: string
}
