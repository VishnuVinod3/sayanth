import React from "react";

const Donate = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Heading */}
      <h1 className="text-center text-black text-3xl font-bold mb-8">Donate</h1>

      {/* Section with paragraph and image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        <div>
          <p className="text-lg">
            Thank you for considering supporting us. Your donation helps us
            provide care for animals in need and find them loving homes.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.u7mbI7bZuUxniCt1e5z3zgHaDb&pid=Api&P=0&h=180"
            alt="Sample"
            className="rounded-full w-40 h-40 object-cover"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600">
          Pets
        </button>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600">
          Forms
        </button>
      </div>

      {/* Active Adoptions Section */}
      <div className="bg-gray-100 p-6 rounded-lg ">
        <h2 className="text-center text-2xl font-bold mb-6">ACTIVE ADOPTIONS</h2>
        <div className="grid grid-cols-1 md:grid-rows-3 gap-6">
          {/* Pet Block 1 */}
          <div className="text-center bg-white shadow-md p-4 rounded-lg">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.49CH_m8xcY3b6stGkMkG2AHaEO&pid=Api&P=0&h=180"
              alt="Pet 1"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Name:ramu</h3>
            <h3 className="font-semibold">PetID: 001</h3>
            <p>Category: Dog</p>
          </div>
          {/* Pet Block 2 */}
          <div className="text-center bg-white shadow-md p-4 rounded-lg">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.V_c8E4ESAGihxGd5WhELdgHaFn&pid=Api&P=0&h=180"
              alt="Pet 2"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Name:Zoko</h3>
            <h3 className="font-semibold">PetID: 002</h3>
            <p>Category: Cat</p>
          </div>
          {/* Pet Block 3 */}
          <div className="text-center bg-white shadow-md p-4 rounded-lg">
            <img
              src="https://i.ytimg.com/vi/C-JgdBDkqM0/maxresdefault.jpg"
              alt="Pet 3"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Name:Niko</h3>
            <h3 className="font-semibold">PetID: 003</h3>
            <p>Category: Rabbit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
