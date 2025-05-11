import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const recipes = [
    { 
      id: 1,
      title: "Greek salad",
      price: 12.99,
      image: "https://i.ibb.co/68c9bLv/greek-salad.jpg",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      id: 2,
      title: "Bruchetta",
      price: 5.99,
      image: "https://i.ibb.co/317GqZv/Bruchetta.png",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: 4.78,
      image: "https://i.ibb.co/sm6MfcH/desert.jpg",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 gap-20">
      {/* Header Section */}
      <header className="w-full flex flex-row justify-evenly bg-green-900 text-white py-8 px-4 md:px-0">
        <div className="flex flex-col justify-around w-[50%]">
          <h1 className="text-4xl font-semibold text-yellow-300">Little Lemon</h1>
          <div className="flex flex-col gap-7">
            <h2 className="text-2xl font-semibold">Munich</h2>
            <p className="text-lg">
              Your favorite restaurant for delicious meals <br /> Book Now!
            </p>
            <button className="button">
              <Link to="/booking" className="!text-black">Reserve</Link>
            </button>
          </div>
        </div>
        <img src="home.jpg" alt="home" className="w-[40%] hidden md:block h-[90%] rounded-4xl shadow-2xl relative top-9" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col px-4 py-12 space-y-6  gap-20 " >
        <nav className="flex flex-col md:flex-row items-center justify-around gap-24 w-full h-[50%]   rounded-lg p-6">
          <h1 className="text-xl font-bold">Special this week!</h1>
          <button className="bg-yellow-500 h-[120%] w-[20%] cursor-pointer rounded-xl transition-all ease-in duration-300 hover:bg-white hover:scale-105">
         <Link to="/OnlineMenu" className="!text-black">
          Online Menu
          </Link>
          </button>
        </nav>

        {/* Cards Section */}
       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
  {recipes.map((recipe) => (
    <div
      key={recipe.id}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-56 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5 w-[100%]  flex flex-col justify-between flex-grow space-y-3 gap-10 ">
        <h3 className="text-xl font-bold text-gray-800 shadow-2xl">{recipe.title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{recipe.description}</p>
        <div className="flex justify-between items-center w-full "> 
          <span className="text-lg font-semibold text-amber-700">${recipe.price}</span>
          <button className="md:button w-[40%] bg-yellow-500 h-[120%] rounded-xl transition-all ease-in duration-300 hover:bg-white hover:scale-105"><Link to="/booking" className="!text-black">
           Reserve a Table
          </Link>
           
          </button>
        </div>
      </div>
    </div>
  ))}
</section>


      </main>
    </div>
  );
};

export default HomePage;

