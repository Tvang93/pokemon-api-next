import { PokeLocations } from "@/lib/interfaces";
import { BreakWord } from "@/lib/services";

const LocationsComponent = (props: PokeLocations) => {
    const locations = props.pokeLocations.map(locations => BreakWord(locations.location_area.name)).join(", ")

  return (
    <div className="md:col-span-2 lg:col-start-2 bg-[rgb(255,255,255,0.6)] border-1 rounded-sm h-42 mb-6 mx-8 px-2 py-1 lg:m-0 overflow-y-scroll">
      <h1>Locations:</h1>
      <p id="locations">{locations[0] != undefined ? locations : `N/A`}</p>
    </div>
  );
};

export default LocationsComponent;
