import Link from "next/link";

async function getBookings() {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store', mode: 'no-cors' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Bookings: React.FC = async () => {
  const bookings = await getBookings()

  return (
    <div className="bg-white flex flex-col w-full justify-center items-center min-h-screen">
      <Link href="/">
        <button className="bg-blue-500 rounded text-lg font-bold text-black h-auto w-60">
            Return to the Home
        </button>
      </Link>
      <div className="p-4 space-y-4 w-full max-w-2xl bg-blue-100 rounded shadow flex flex-col justify-center items-center">
        <h1 className="text-black text-opacity-90 text-2xl">Bookings list:</h1>
        {bookings.map((booking) => (
          <Link href={`/bookings/${booking.id}`} key={booking.id} id={booking.id}>
              <div className="text-black b-2 w-full p-2 border bg-white border-gray-400 rounded hover:bg-gray-300">
                A booking on: {booking.date} starting at {booking.start_time}
              </div>
          </Link>
        ))}
        </div>
    </div>
  );
}

export default Bookings;
