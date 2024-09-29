import { TeamModel } from "../Models/TeamModel";
import fs from 'fs/promises'

const database: TeamModel[] = [
  {
    id: 1,
    name: "Paris Saint-Germain",
    country: "France",
  },
  {
    id: 2,
    name: "Manchester United",
    country: "England",
  },
  {
    id: 3,
    name: "Bayern Munich",
    country: "Germain",
  },
  {
    id: 4,
    name: "Manchester City",
    country: "England",
  },
  {
    id: 5,
    name: "Paris Saint-Germain",
    country: "France",
  },
  {
    id: 6,
    name: "Paris Saint-Germain",
    country: "France",
  },
  {
    id: 7,
    name: "Manchester United",
    country: "England",
  },
  {
    id: 8,
    name: "Bayern Munich",
    country: "Germain",
  },
  {
    id: 9,
    name: "Borussia Dortmund",
    country: "Germain",
  },
  {
    id: 10,
    name: "Paris Saint-Germain",
    country: "France",
  },
  {
    id: 11,
    name: "Liverpool",
    country: "England",
  },
  {
    id: 12,
    name: "Liverpool",
    country: "England",
  },
  {
    id: 13,
    name: "Liverpool",
    country: "England",
  },
  {
    id: 14,
    name: "Liverpool",
    country: "England",
  },
  {
    id: 15,
    name: "Liverpool",
    country: "England",
  },
  {
    id: 16,
    name: "Barcelona",
    country: "Spain",
  },
  {
    id: 17,
    name: "Manchester City",
    country: "England",
  },
  {
    id: 18,
    name: "AC Milan",
    country: "Italy",
  },
  {
    id: 19,
    name: "Retired",
    country: "None",
  },
]

export const findAllTeams = async ():Promise<TeamModel[]> => {
    const data= await fs.readFile("./src/Data/teams.json", "utf-8")
    const teams: TeamModel[] = JSON.parse(data)
    return teams;
}

export const findTeamById = async (id: number):Promise<TeamModel | undefined> => {
    return database.find( Team => Team.id === id);
}

export const createTeam = async (Team: TeamModel) => {
    database.push(Team);
}

export const deleteTeamById = async (id:number) => {
    const index = database.findIndex( Team => Team.id === id);
    if(index !== -1) {
        database.splice(index, 1);
        return true
    }
    return false
}
