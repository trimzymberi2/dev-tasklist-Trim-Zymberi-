import Link from "next/link";

async function getBooking(id: string) {
    const res = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`, { cache: 'no-store',  mode: 'no-cors' });
    
    console.log(id)
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
}
    

const BookingID: React.FC = async ({ params }: any) => {

    const id: string =  params.id
    const booking = await getBooking(id);

    console.log(id);

    return (
        <body className="bg-white">    
            <div className="bg-white w-full max-h-full flex flex-col justify-center items-center">
                <div className="flex justify-center align-top p-5 items-center mt-5">
                    <Link href="/bookings">
                    <button className="bg-blue-500 p-5 rounded-2xl text-lg font-bold text-black h-auto w-60">
                    Return to the bookings list
                    </button>
                    </Link>
                </div>
                <div className="bg-gray-300 flex text-black justify-center p-3 min-w-96 items-center mt-40">
                    This Booking is with: {booking.doctor_name} For: {booking.service} and it ends on: {booking.end_time}
                </div>
            </div>
        </body>
    );   
}

export default BookingID;
