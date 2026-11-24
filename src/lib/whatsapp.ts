import { site } from "@/content/site";

export function whatsappLink(message: string = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function productWhatsappLink(productName: string) {
  return whatsappLink(`Olá! Vim pelo site e gostaria de saber mais sobre a vela ${productName}.`);
}

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function formatPrice(value: number) {
  return brl.format(value);
}
