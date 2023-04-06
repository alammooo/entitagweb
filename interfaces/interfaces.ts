export const COMPANYPROFILE = "companyprofile"
export const WEBAPPLICATION = "webapplicaiton"
export const ONLINESHOP = "onlineshop"
export const COMPANYPROFILEFEATURE = "companyprofilefeature"
export const ONLINESHOPFEATURES = "onlineshopfeatures"

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
