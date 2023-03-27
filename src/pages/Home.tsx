import { Footer } from '../components/Footer'
import { GoTop } from '../components/GoTop'
import { GridContent } from '../components/GridContent'
import { GridImage } from '../components/GridImage'
import { GridText } from '../components/GridText'
import { GridTwoColumns } from '../components/GridTwoColumns'
import { Menu } from '../components/Menu'
import { PageContainer } from '../styles/layouts/styles'
import { client } from '../services/apollo'
import { gql } from '@apollo/client'
import { useEffect, useState } from 'react'
import {
  IGridContent,
  IGridImage,
  IGridText,
  IGridTwoColumn,
  ILinks,
} from '../@types/GridTwoColums'

interface GetGridTwoColumnsResponse {
  gridTwoColums: {
    title: string
    id: string
    slug: string
    description: {
      html: string
    }
    banner: {
      url: string
    }[]
  }
}

interface GetGridContentResponse {
  gridContent: {
    title: string
    description: {
      html: string
    }
  }
}

interface GetGridTextResponse {
  gridText: {
    slug: string
    title: 'Mudanças climáticas'
    description: {
      html: string
    }
    contents: {
      description: {
        html: string
      }
    }[]
  }
}

interface GetGridImageResponse {
  gridImage: {
    title: string
    description: {
      html: string
    }
    images: {
      banner: {
        id: string
        url: string
      }
    }[]
  }
}

interface GetLinkResponse {
  links: {
    text: string
    link: string
  }[]
}

export function Home() {
  const [gridTwoColumn, setGridTwoColumn] = useState<IGridTwoColumn>()
  const [gridContent, setGridContent] = useState<IGridContent>()
  const [gridText, setGridText] = useState<IGridText>()
  const [gridImage, setGridImage] = useState<IGridImage>()
  const [links, setLinks] = useState<ILinks[]>([])

  async function GetLinks() {
    const { data } = await client.query<GetLinkResponse>({
      query: gql`
        query GetLinks {
          links {
            text
            link
          }
        }
      `,
    })

    const linkProps = data.links.map((link) => {
      return {
        link: link.link,
        children: link.text,
      }
    })

    return linkProps
  }

  async function getGridImages() {
    const { data } = await client.query<GetGridImageResponse>({
      query: gql`
        query GetGridImage($slug: String) {
          gridImage(where: { slug: $slug }) {
            slug
            title
            description {
              html
            }
            images {
              id
              banner {
                url
              }
            }
          }
        }
      `,
      variables: {
        slug: 'preservacao-da-biodiversidade',
      },
    })

    const gridImageProps = {
      title: data.gridImage.title,
      description: data.gridImage.description.html,
      images: data.gridImage.images.map((image) => {
        return {
          id: image.banner.id,
          src: image.banner.url,
        }
      }),
    }

    return gridImageProps
  }

  async function getGridTwoColums() {
    const { data } = await client.query<GetGridTwoColumnsResponse>({
      query: gql`
        query GerGridTwoColumns($slug: String) {
          gridTwoColums(where: { slug: $slug }) {
            id
            slug
            title
            description {
              html
            }
            banner {
              url
            }
          }
        }
      `,
      variables: {
        slug: 'energias-renovaveis',
      },
    })

    const gridProps = {
      imgUrl: data.gridTwoColums.banner[0].url,
      text: data.gridTwoColums.description.html,
      title: data.gridTwoColums.title,
    }

    return gridProps
  }

  async function getGriContent() {
    const { data } = await client.query<GetGridContentResponse>({
      query: gql`
        query GetgridContent($slug: String) {
          gridContent(where: { slug: $slug }) {
            id
            slug
            title
            description {
              html
            }
          }
        }
      `,
      variables: {
        slug: 'reducao-do-consumo-de-agua-e-energia',
      },
    })

    const gridContentProps = {
      title: data.gridContent.title,
      text: data.gridContent.description.html,
    }

    return gridContentProps
  }

  async function getGridText() {
    const { data } = await client.query<GetGridTextResponse>({
      query: gql`
        query GetGridText($slug: String) {
          gridText(where: { slug: $slug }) {
            slug
            title
            description {
              html
            }
            contents {
              slug
              description {
                html
              }
            }
          }
        }
      `,
      variables: {
        slug: 'mudancas-climaticas',
      },
    })

    const gridTextProps = {
      title: data.gridText.title,
      description: data.gridText.description.html,
      contents: data.gridText.contents.map((content) => {
        return {
          description: content.description.html,
        }
      }),
    }

    return gridTextProps
  }

  useEffect(() => {
    getGridTwoColums().then((res) => setGridTwoColumn(res))
    getGriContent().then((res) => setGridContent(res))
    getGridText().then((res) => setGridText(res))
    getGridImages().then((res) => setGridImage(res))
    GetLinks().then((res) => setLinks(res))
  }, [])

  return (
    <>
      <PageContainer>
        <Menu links={links} />
        <GridTwoColumns {...gridTwoColumn!} />
        <GridContent {...gridContent!} />
        <GridText {...gridText!} />
        <GridImage {...gridImage!} />
        <Footer />
        <GoTop />
      </PageContainer>
    </>
  )
}
