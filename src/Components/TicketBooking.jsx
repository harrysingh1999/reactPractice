import React, { useEffect, useState } from "react";
import { seats } from "../Constants/Constants";

export default function TicketBooking() {
  const [clickedSeats, setClickedSeats] = useState(0);
  const [clickedItem, setClickedItem] = useState([]);
  const [bookedSeatsData, setBookedSeatsData] = useState();

  if (clickedSeats > 5) {
    setClickedItem([]);
    setClickedSeats(0);
    alert("You can only book a maximum of 5 Seats");
  }

  console.log(clickedItem);

  const handleReset = () => {
    window.scrollTo(0, 0);
    setClickedItem([]);
    setBookedSeatsData([]);
  };

  const handleClick = (index, section) => {
    setClickedSeats((prevState) => prevState + 1);
    setClickedItem((prevState) => [
      ...prevState,
      { seat: index, category: section },
    ]);
  };

  const handleBooking = () => {
    setClickedSeats(0);
    setClickedItem([])
    window.scrollTo(0, 0);
    const bookedSeats = clickedItem.reduce((acc, curr) => {
      acc[curr.category] = acc[curr.category]
        ? [...acc[curr.category], curr.seat]
        : [curr.seat];
      return acc;
    }, {});

    setBookedSeatsData(
      Object.entries(bookedSeats).map((item, i) => ({
        section: item[0],
        seat: item[0 + 1],
      }))
    );
  };

  return (
    <div className="mx-10 mb-10">
      <h1 className="text-4xl font-bold my-6 text-center">
        Book Tickets Online
      </h1>
      {bookedSeatsData?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-3xl text-green-700 font-bold mb-4 text-center">
            Your Booking Details!!!
          </h2>
          {bookedSeatsData.map((item) => (
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
        </div>
      )}
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
      <div className="flex justify-center gap-6">
        <button
          className="border border-black/40 p-2 rounded-lg"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>
        <button
          className="border border-black/40 p-2 rounded-lg"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
