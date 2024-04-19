import {Hero, SearchBar, CustomFilter, CarCard} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({searchParams}) {
//  const allCars = await fetchCars();
    const allCars = await fetchCars({
      manufacturer: searchParams.manufacturer || '',
      year: searchParams.year || 2022, 
      fuel: searchParams.fuel ||  '', 
      limit: searchParams.limit || 10,
      model: searchParams.model || '',  
    });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 0 || !allCars;
  

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="disccover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              { allCars?.map((car)=> <CarCard car={car} />
              )}
            </div>
            We have cars</section>
        ): (
          <div className="home__error-container" >
            <h2 className="text-black text-xl font-bold">No cars</h2>
            <p> {allCars?.messages} </p>
          </div>
        )}

      </div>
    </main>
  );
}
