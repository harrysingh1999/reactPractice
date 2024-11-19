import React, { useState } from "react";

export default function TicketBooking() {
  const [isClicked, setIsClicked] = useState(false);
  const [clickedSeats, setClickedSeats] = useState(0);
  const [clickedItem, setClickedItem] = useState([]);
  const [bookedSeatsUI, setBookedSeatsUI] = useState();

  const handleClick = (index, section) => {
    setIsClicked(true);

    setClickedSeats((prevState) => prevState + 1);
    setClickedItem((prevState) => [
      ...prevState,
      { seat: index, category: section },
    ]);
  };

  const bookedSeats = clickedItem.reduce((acc, curr) => {
    acc[curr.category] = acc[curr.category]
      ? [...acc[curr.category], curr.seat]
      : [curr.seat];
    return acc;
  }, {});

  const handleBooking = () => {
    setBookedSeatsUI(
      Object.entries(bookedSeats).map((item, i) => ({
        section: item[0],
        seat: item[0 + 1],
      }))
    );
  };

  if (clickedSeats > 5) {
    setClickedSeats(0);
    setClickedItem([]);
    alert("You can only book a maximum of 5 Seats");
  }

  const seats = [
    { section: "VIP Section", grid: 5, seats: 25 },
    { section: "General Section", grid: 6, seats: 36 },
    { section: "Economy Section", grid: 8, seats: 64 },
  ];

  return (
    <div className="mx-10">
      {bookedSeatsUI && (
        <h1 className="text-3xl font-bold my-6 text-center">Booking Details</h1>
      )}
      {bookedSeatsUI?.map((item) => (
        <div className="flex justify-center" key={item.section}>
          <span>{item.section}: </span>
          {item.seat.length > 1 ? (
            item.seat.map((s) => (
              <span className="mx-2" key={s}>
                {++s}
              </span>
            ))
          ) : (
            <span className="mx-2">{++item.seat} </span>
          )}
        </div>
      ))}
      {seats.map((seat, idx) => {
        return (
          <div className="text-center mb-4" key={seat.section}>
            <h2 className="font-bold my-2">{seat.section}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${seat.grid}, 1fr)`,
                gridTemplateRows: `repeat(${seat.grid}, 1fr)`,
              }}
            >
              {Array.from({ length: seat.seats }, (_, i) => (
                <button
                  key={i}
                  className={`border border-black/40 p-2 ${
                    clickedSeats <= 5 &&
                    clickedItem.some(
                      (item) =>
                        item.seat === i && item.category === seat.section
                    ) &&
                    isClicked &&
                    "bg-green-500 text-white cursor-not-allowed"
                  }`}
                  disabled={
                    clickedSeats <= 5 &&
                    clickedItem.some(
                      (filteredItem) =>
                        filteredItem.seat === i &&
                        filteredItem.category === seat.section
                    )
                  }
                  onClick={() => handleClick(i, seat.section)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        );
      })}
      <button
        className="border border-black/40 p-2 rounded-lg"
        onClick={handleBooking}
      >
        Confirm Booking
      </button>
    </div>
  );
}
