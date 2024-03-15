"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Link from "next/link";


interface Booking {
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string;
}


export default function CreateBooking() {
  const [booking, setBooking] = useState<Booking>({
    service: '',
    doctor_name: '',
    start_time: '',
    end_time: '',
    date: ''
  });

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://host.docker.internal:5000/api/bookings', booking);
      window.location.href = '/bookings';
    } catch (error) {
      setError('Error creating booking');
    }
  };

  console.log(booking.service);
  console.log(booking.doctor_name);
  console.log(booking.start_time);
  console.log(booking.end_time);
  console.log(booking.date);

  return (
    <div className='w-full max-h-full flex flex-col justify-center items-center mt-52 text-black'>
      <form onSubmit={handleSubmit} className='p-4 space-y-4 w-full max-w-2xl bg-blue-100 rounded shadow flex flex-col justify-center items-center'>
      <h1 className='text'>Create a Booking</h1>
        <input type="text" className='mb-2 w-full p-2 border border-gray-300 rounded' name="service" value={booking.service} onChange={handleInputChange} placeholder="Service" />
        <input type="text" className='mb-2 w-full p-2 border border-gray-300 rounded' name="doctor_name" value={booking.doctor_name} onChange={handleInputChange} placeholder="Doctor Name" />
        <input type="text" className='mb-2 w-full p-2 border border-gray-300 rounded' name="start_time" value={booking.start_time} onChange={handleInputChange} placeholder="Start Time" />
        <input type="text" className='mb-2 w-full p-2 border border-gray-300 rounded' name="end_time" value={booking.end_time} onChange={handleInputChange} placeholder="End Time" />
        <input type="text" className='mb-2 w-full p-2 border border-gray-300 rounded' name="date" value={booking.date} onChange={handleInputChange} placeholder="Date" />

        <button type="submit"   className='w-full p-2 text-white bg-blue-500 rounded'>Add Booking</button>
      </form>
    </div>
  );
}
