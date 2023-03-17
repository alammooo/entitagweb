export interface OfferInterface {
  type: string
  price: number
  benefit: string[]
}
export const offerType = [
  {
    type: "classic",
    price: 3499,
    benefit: ["Customizad Plans", "Billing Report", "Access to Asana"],
  },
  {
    type: "popular",
    price: 4999,
    benefit: [
      "Customizad Plans",
      "Billing Report",
      "Access to Asana",
      "Unlimited themes",
    ],
  },
  {
    type: "ultimate",
    price: 8999,
    benefit: ["Customizad Plans", "Billing Report", "Unlimited themes"],
  },
]
