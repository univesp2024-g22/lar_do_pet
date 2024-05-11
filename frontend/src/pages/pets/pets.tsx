import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { PetsList } from "../../components/PetsList/PetsList"

export const Pets: React.FC = () => {
  return (
    <>
    <Header />
    <PetsList />
    <Footer />
    </>
  )
}