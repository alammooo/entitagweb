export const COMPANYPROFILE = "companyprofile"
export const WEBAPPLICATION = "webapplicaiton"
export const ONLINESHOP = "onlineshop"

export interface companyProfileInterface {
  price: number
  description: string
  benefit: string[]
  type: string
}

export interface ImageListInterface {
  name: string
  image: SVGImageElement
}
