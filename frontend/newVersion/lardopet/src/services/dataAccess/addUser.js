import { db } from "../../config/firebase/firebase";

const reference = db.collection('users');

export const addUser = async (user) => {
  try {
    await reference.add(user);
    console.log('Usuário adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar usuário: ', error);
  }
}

export const addPet = async (pet) => {
  try {
    await reference.add(pet);
    console.log('Pet adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar pet: ', error);
  }
}