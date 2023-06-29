import { Hero, SearchBar } from "@/components"
import { getAllCars } from "../utils/cars"

export default async function Home() {
  const cars = await getAllCars()
  
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width">
        <SearchBar/>
      </div>
    </main>
  )
}
