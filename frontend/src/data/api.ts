//api de teste para carregar os pets

export interface Pet {
  id: number;
  foto: string;
  nome: string;
  genero: string;
  idade: number;
  local: string;
  cidade: string;
  estado: string;
}

export const pets: Pet[] = [
  {
    id: 1,
    foto: "https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg",
    nome: "Rex",
    genero: "macho",
    idade: 5,
    local: "Centro",
    cidade: "São Paulo",
    estado: "SP"
  },
  {
    id: 2,
    foto: "https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg",
    nome: "Bella",
    genero: "fêmea",
    idade: 3,
    local: "Jardins",
    cidade: "São Paulo",
    estado: "SP"
  },
  {
    id: 3,
    foto: "https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg",
    nome: "Max",
    genero: "macho",
    idade: 2,
    local: "Vila Mariana",
    cidade: "São Paulo",
    estado: "SP"
  },
  {
    id: 4,
    foto: "https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg",
    nome: "Luna",
    genero: "fêmea",
    idade: 4,
    local: "Moema",
    cidade: "São Paulo",
    estado: "SP"
  },
  {
    id: 5,
    foto: "https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg",
    nome: "Charlie",
    genero: "macho",
    idade: 6,
    local: "Pinheiros",
    cidade: "São Paulo",
    estado: "SP"
  },
  {
    id: 6,
    foto: "https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg",
    nome: "Molly",
    genero: "fêmea",
    idade: 1,
    local: "Itaim Bibi",
    cidade: "São Paulo",
    estado: "SP"
  },
  {
    id: 7,
    foto: "https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg",
    nome: "Rocky",
    genero: "macho",
    idade: 7,
    local: "Brooklin",
    cidade: "São Paulo",
    estado: "SP"
  },
  {
    id: 8,
    foto: "https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg",
    nome: "Daisy",
    genero: "fêmea",
    idade: 8,
    local: "Campo Belo",
    cidade: "São Paulo",
    estado: "SP"
  },
  {
    id: 9,
    foto: "https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg",
    nome: "Jack",
    genero: "macho",
    idade: 9,
    local: "Morumbi",
    cidade: "São Paulo",
    estado: "SP"
  },
  {
    id: 10,
    foto: "https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg",
    nome: "Sadie",
    genero: "fêmea",
    idade: 10,
    local: "Butantã",
    cidade: "São Paulo",
    estado: "SP"
  }
]
