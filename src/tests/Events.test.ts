import request from "supertest";
import { App } from "../app";

const app = new App();
const express = app.app
describe("Event test", () => {
  it("/POST Event", async () => {
    const event = {
      title: "Jorge e Matheus",
      price: [{ sector: "Pista", amount: "20" }],
      description: "Evento descrição",
      city: "Belo horizonte",
      location: {
        latitude: "-19.8658619",
        longitude: "-43.9737064",
      },
      coupons: [],
      date: new Date(),
      participants: [],
    };

    const response = await request(express)
      .post("/events")
      .field('title', event.title)
      .field('description', event.description)
      .field('city', event.city)
      .field('coupons', event.coupons)
      .field('location[latitude]', event.location.latitude)
      .field('location[longitude]', event.location.longitude)
      .field('price[sector]', event.price[0].sector)
      .field('price[amount]', event.price[0].amount)
      .attach("banner", "/Users/LUCIANA LUNES/Downloads/imagens.png")
      .attach("flyers", "/Users/LUCIANA LUNES/Downloads/download (1).png")
      .attach("flyers", "/Users/LUCIANA LUNES/Downloads/download (2).png.crdownload");
      if(response.error) {
        console.log("🚀 ~ file: Events.test.ts:36 ~ it ~ error:", response.error)
        
      }
      expect(response.status).toBe(201);
      expect(response.body).toEqual({ message: "evento criado som sucesso." })
  });
});
