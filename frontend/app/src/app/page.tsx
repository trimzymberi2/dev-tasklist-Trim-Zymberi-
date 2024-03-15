"use client";

import Link from "next/link";

const Home: React.FC = () => {

  return (
    <div className="bg-white flex flex-col w-full justify-center items-center min-h-screen gap-5 text-black">
      <h1 className="text-black text-opacity-90 text-2xl">Welcome at Pabau Clinic</h1>
      <Link href="/bookings">
          <button className="w-60 flex justify-center items-center p-2 text-white bg-blue-500 rounded">Bookings list</button>
      </Link>
      
      <Link href="/createBooking">
          <button className="w-60 p-2 justify-center items-center text-white bg-blue-500 rounded">Create a booking</button>
      </Link>
    </div>
  );
};

export default Home;
