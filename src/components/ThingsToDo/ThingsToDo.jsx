import React from "react";

const ThingsToDo = () => {
  return (
    <div className="bg-[#EEEEEE]">
      {/* Header */}
      <div className="relative">
            <img
                src="/src/assets/ThingsToDo/Gambar1.jpg"
                alt="Bali Vibes Hero"
                className="w-full h-[380px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
          <p className="mt-3 font-playfair font-semibold text-3xl">
            Things To Do
          </p>
        </div>
      </div>

    {/* Things to Do Section */}
    <section className="py-16 px-6 md:px-16 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto text-center">
          < div className="mt-8 mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Activity 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
            <img src="/src/assets/Homepage/Gambar12.jpg" alt="Surfing in Bali" className="w-[50%] h-full object-cover" />
                <div className="p-4 w-[50%]">
                    <h3 className="text-lg text-left font-bold text-gray-800">Surfing at Kuta Beach</h3>
                <p className="mt-2 text-left font-light text-gray-600">Catch some waves at Bali's most famous beach, perfect for surfers of all levels.</p>
            </div>
        </div>

    {/* Activity 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
        <img src="/src/assets/Homepage/Gambar13.png" alt="Hiking Mount Agung" className="w-[50%] h-full object-cover" />
        <div className="p-4 w-[50%]">
          <h3 className="text-lg text-left font-bold text-gray-800">Hiking Mount Agung</h3>
          <p className="mt-2 text-left font-light text-gray-600">Embark on an early morning hike to Bali's highest volcano for stunning sunrise views.</p>
        </div>
      </div>

{/* Activity 3 */}
<div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
        <img src="/src/assets/Homepage/Gambar10.jpg" alt="Snorkeling at Nusa Penida" className="w-[50%] h-full object-cover" />
        <div className="p-4 w-[50%]">
          <h3 className="text-lg text-left font-bold text-gray-800">Snorkeling at Nusa Penida</h3>
          <p className="mt-2 text-left font-light text-gray-600">Discover vibrant coral reefs and marine life around the island of Nusa Penida.</p>
        </div>
      </div>

      {/* Activity 4 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
        <img src="/src/assets/Homepage/Gambar6.jpg" alt="Visiting Ubud Monkey Forest" className="w-[50%] h-full object-cover" />
        <div className="p-4 w-[50%]">
          <h3 className="text-lg text-left font-bold text-gray-800">Visiting Ubud Monkey Forest</h3>
          <p className="mt-2 text-left font-light text-gray-600">Meet the friendly monkeys and enjoy the lush greenery of Ubud's iconic forest sanctuary.</p>
        </div>
      </div>

      {/* Activity 5 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
        <img src="/src/assets/Homepage/Gambar14.jpg" alt="Exploring Tegallalang Rice Terraces" className="w-[50%] h-full object-cover" />
        <div className="p-4 w-[50%]">
          <h3 className="text-lg text-left font-bold text-gray-800">Exploring Tegallalang Rice Terraces</h3>
          <p className="mt-2 text-left font-light text-gray-600">Marvel at the beautiful terraced rice fields and capture stunning photos.</p>
        </div>
      </div>

      {/* Activity 6 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center w-full h-[190px]">
        <img src="/src/assets/Homepage/Gambar11.jpg" alt="Relaxing at Jimbaran Bay" className="w-[50%] h-full object-cover" />
        <div className="p-4 w-[50%]">
          <h3 className="text-lg text-left font-bold text-gray-800">Relaxing at Jimbaran Bay</h3>
          <p className="mt-2 text-left font-light text-gray-600">Unwind with fresh seafood and stunning sunsets on the beach.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </div>
  );
};

export default ThingsToDo;