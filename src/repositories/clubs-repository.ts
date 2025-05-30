import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

const database = [
    {
        id: 1,
        name: "Real Madrid",
    },
    {
        id: 2,
        name: "Barcelona",
    },
    {
        id: 3,
        name: "Manchester United",
    },
    {
        id: 4,
        name: "Manchester City",
    },
    {
        id: 5,
        name: "Liverpool",
    },
    {
        id: 6,
        name: "Bayern Munich",
    },
    {
        id: 7,
        name: "Juventus",
    },
    {
        id: 8,
        name: "Paris Saint-Germain",
    },
    {
        id: 9,
        name: "Chelsea",
    },
    {
        id: 10,
        name: "Arsenal",
    },
    {
        id: 11,
        name: "Tottenham Hotspur",
    },
    {
        id: 12,
        name: "Atletico Madrid",
    },
    {
        id: 13,
        name: "Borussia Dortmund",
    },
    {
        id: 14,
        name: "Inter Milan",
    },
    {
        id: 15,
        name: "AC Milan",
    },
    {
        id: 16,
        name: "Sevilla",
    },
    {
        id: 17,
        name: "Ajax",
    },
    {
        id: 18,
        name: "Napoli",
    },
    {
        id: 19,
        name: "Al Nassr",
    },
    {
        id: 20,
        name: "Al Hilal",
    },
    {
        id: 21,
        name: "Inter Miami",
    },
    {
        id: 22,
        name: "Retired"
    }
];

export const findAllClubs = async (): Promise<ClubModel[]> =>{
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
}