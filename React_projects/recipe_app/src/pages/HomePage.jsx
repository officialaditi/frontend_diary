import { Search } from "lucide-react";
import RecipeCard from "../component/RecipeCard";

const HomePage = () => {
  return (
    <div className="bg-gray-200 p-10 flex-1">
      <div className="max-w-screen-lg mx-auto px-4">
        <form>
          <label className="input shadow-md flex items-center gap-2 w-full ">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md flex-grow w-full px-2 py-5"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <h1 className="font-bold text-2xl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-red-400 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular Choices
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            <RecipeCard/>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
