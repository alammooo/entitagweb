export default function formatCurrency(amount: any, currency: string = "IDR"): string {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
  return formatter.format(amount)
}