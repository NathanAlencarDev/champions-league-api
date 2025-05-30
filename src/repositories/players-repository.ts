import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "club": "Inter Miami",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
            "Overall": 92,
            "Pace": 85,
            "Shooting": 91,
            "Passing": 90,
            "Dribbling": 95,
            "Defending": 38,
            "Physical": 65
        }
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "club": "Al Nassr",
        "nationality": "Portugal",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 87,
            "Shooting": 93,
            "Passing": 82,
            "Dribbling": 88,
            "Defending": 35,
            "Physical": 77
        }
    },
    {
        "id": 3,
        "name": "Kylian Mbappé",
        "club": "PSG",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 97,
            "Shooting": 87,
            "Passing": 79,
            "Dribbling": 91,
            "Defending": 36,
            "Physical": 74
        }
    },
    {
        "id": 4,
        "name": "Luka Modrić",
        "club": "Real Madrid",
        "nationality": "Croatia",
        "position": "Midfielder",
        "statistics": {
            "Overall": 88,
            "Pace": 72,
            "Shooting": 79,
            "Passing": 89,
            "Dribbling": 86,
            "Defending": 72,
            "Physical": 65
        }
    },
    {
        "id": 5,
        "name": "Virgil van Dijk",
        "club": "Liverpool",
        "nationality": "Netherlands",
        "position": "Defender",
        "statistics": {
            "Overall": 89,
            "Pace": 78,
            "Shooting": 60,
            "Passing": 70,
            "Dribbling": 68,
            "Defending": 91,
            "Physical": 86
        }
    },
    {
        "id": 6,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": "Belgium",
        "position": "Midfielder",
        "statistics": {
            "Overall": 91,
            "Pace": 76,
            "Shooting": 86,
            "Passing": 93,
            "Dribbling": 87,
            "Defending": 64,
            "Physical": 78
        }
    },
    {
        "id": 7,
        "name": "Erling Haaland",
        "club": "Manchester City",
        "nationality": "Norway",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 90,
            "Shooting": 94,
            "Passing": 68,
            "Dribbling": 80,
            "Defending": 45,
            "Physical": 88
        }
    },
    {
        "id": 8,
        "name": "Neymar Jr.",
        "club": "Al Hilal",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 89,
            "Shooting": 84,
            "Passing": 85,
            "Dribbling": 94,
            "Defending": 38,
            "Physical": 61
        }
    },
    {
        "id": 9,
        "name": "Sergio Ramos",
        "club": "Sevilla",
        "nationality": "Spain",
        "position": "Defender",
        "statistics": {
            "Overall": 86,
            "Pace": 70,
            "Shooting": 65,
            "Passing": 72,
            "Dribbling": 68,
            "Defending": 88,
            "Physical": 84
        }
    },
    {
        "id": 10,
        "name": "Joshua Kimmich",
        "club": "Bayern Munich",
        "nationality": "Germany",
        "position": "Midfielder",
        "statistics": {
            "Overall": 88,
            "Pace": 70,
            "Shooting": 75,
            "Passing": 87,
            "Dribbling": 84,
            "Defending": 80,
            "Physical": 78
        }
    },
    {
        "id": 11,
        "name": "Jan Oblak",
        "club": "Atletico Madrid",
        "nationality": "Slovenia",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 91,
            "Pace": 43,
            "Shooting": 30,
            "Passing": 50,
            "Dribbling": 45,
            "Defending": 25,
            "Physical": 65
        }
    },
    {
        "id": 12,
        "name": "Mohamed Salah",
        "club": "Liverpool",
        "nationality": "Egypt",
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 93,
            "Shooting": 87,
            "Passing": 80,
            "Dribbling": 89,
            "Defending": 45,
            "Physical": 70
        }
    },
    {
        "id": 13,
        "name": "Toni Kroos",
        "club": "Real Madrid",
        "nationality": "Germany",
        "position": "Midfielder",
        "statistics": {
            "Overall": 87,
            "Pace": 55,
            "Shooting": 81,
            "Passing": 91,
            "Dribbling": 82,
            "Defending": 70,
            "Physical": 68
        }
    },
    {
        "id": 14,
        "name": "Harry Kane",
        "club": "Bayern Munich",
        "nationality": "England",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 74,
            "Shooting": 93,
            "Passing": 82,
            "Dribbling": 81,
            "Defending": 48,
            "Physical": 83
        }
    },
    {
        "id": 15,
        "name": "Vinícius Jr.",
        "club": "Real Madrid",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 88,
            "Pace": 96,
            "Shooting": 81,
            "Passing": 78,
            "Dribbling": 92,
            "Defending": 38,
            "Physical": 70
        }
    },
    {
        "id": 16,
        "name": "Casemiro",
        "club": "Manchester United",
        "nationality": "Brazil",
        "position": "Midfielder",
        "statistics": {
            "Overall": 87,
            "Pace": 63,
            "Shooting": 72,
            "Passing": 76,
            "Dribbling": 73,
            "Defending": 87,
            "Physical": 85
        }
    },
    {
        "id": 17,
        "name": "Antoine Griezmann",
        "club": "Atletico Madrid",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
            "Overall": 87,
            "Pace": 78,
            "Shooting": 84,
            "Passing": 82,
            "Dribbling": 85,
            "Defending": 60,
            "Physical": 72
        }
    },
    {
        "id": 18,
        "name": "Marc-André ter Stegen",
        "club": "Barcelona",
        "nationality": "Germany",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 90,
            "Pace": 48,
            "Shooting": 30,
            "Passing": 55,
            "Dribbling": 50,
            "Defending": 20,
            "Physical": 65
        }
    },
    {
        "id": 19,
        "name": "David Beckham",
        "club": "Retired",
        "nationality": "England",
        "position": "Midfielder",
        "statistics": {
            "Overall": 85,
            "Pace": 76,
            "Shooting": 82,
            "Passing": 90,
            "Dribbling": 84,
            "Defending": 70,
            "Physical": 72
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> =>{
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async(player: PlayerModel) => {
    database.push(player);
}

export const deleteOnePlayer = async(id: number) => {
    const index = database.findIndex(p => p.id === id);

    //Quando o id nao é encontrado o index receber o valor de -1.
    if(index !== -1){
        database.splice(index, 1);
        return true
    }

    return false;
}

export const findAndModifyPlayer = async (id:number, statistics: StatisticsModel): Promise<PlayerModel> =>{
    //find player
    const playerIndex = database.findIndex(player => player.id === id);

    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex];
}