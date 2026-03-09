import { useState } from "react";

function Testimonials() {
  const reviews = [
    {
      id: 1,
      title: "Exceptional Stay & Service",
      text: "I loved everything about this hotel, from room types, customer service, specially house keeping was on top level and facilities to the serene pool area and gym facility. I will recommend others for sure.",
      author: "Mr. Satish K",
      meta: "Business Trip • 3 Nights",
    },
    {
      id: 2,
      title: "Warm, Welcoming & Comfortable",
      text: "Wonderful stay at Dhaneshwari Guestline – highly recommend! The staff was exceptionally welcoming and went out of their way to ensure I had a comfortable stay from start to finish.",
      author: "Mr. Pavan Dahale",
      meta: "Solo Traveller • Weekend",
    },
    {
      id: 3,
      title: "Professional Staff & Prime Location",
      text: "Wonderful experience. The staff was very helpful and professional. Rooms are well maintained and the hotel is in a prime location, close to major temples and attractions.",
      author: "Mr. Anand",
      meta: "Family Visit • 2 Nights",
    },
    {
      id: 4,
      title: "Feels Like A Second Home",
      text: "Amazing service and great hospitality. The team made us feel at home and helped us with local guidance and temple visits. We will definitely visit again.",
      author: "Mr. Rahul",
      meta: "Family Trip • 4 Nights",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const visible = [
    reviews[index % reviews.length],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#f6efe6] via-[#f2e6d8] to-[#f6efe6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
            Guest Experiences
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3c2e23]">
            What Our Guests Say
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#7b6a57] max-w-2xl mx-auto">
            Real stories from guests who chose Dhaneshwari Guestline for their
            Kashi Vishwanath visit and Varanasi stay.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-6">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="hidden md:flex w-10 h-10 rounded-full border border-amber-500 text-amber-600 items-center justify-center hover:bg-amber-500 hover:text-white transition shadow-sm bg-white/70 backdrop-blur"
            aria-label="Previous testimonial"
          >
            ❮
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {visible.map((review) => (
              <article
                key={review.id}
                className="relative rounded-2xl bg-white/90 backdrop-blur-sm shadow-[0_18px_45px_rgba(15,23,42,0.10)] px-6 py-8 md:px-7 md:py-9 border border-[#f0e2d3]"
              >
                {/* Quote badge */}
                <div className="absolute -top-6 left-8">
                  <div className="w-11 h-11 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md">
                    <span className="text-2xl leading-none">“</span>
                  </div>
                </div>

                {/* Spacer to align content nicely */}
                <div className="mt-4 mb-2" />

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-[#3e2f23] mb-3">
                  {review.title}
                </h3>

                {/* Text */}
                <p className="text-sm md:text-[15px] leading-relaxed text-[#6f5d4a]">
                  {review.text}
                </p>

                {/* Divider + guest info */}
                <div className="mt-8 pt-5 border-t border-[#f0e2d3] flex flex-col gap-1">
                  <p className="text-sm font-semibold text-[#3e2f23]">
                    {review.author}
                  </p>
                  {review.meta && (
                    <p className="text-xs text-[#8e7a64]">{review.meta}</p>
                  )}
                  <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-[#b7905b] via-[#d7aa6b] to-transparent rounded-full" />
                </div>
              </article>
            ))}
          </div>

          {/* Right Arrow (desktop) */}
          <button
            onClick={next}
            className="hidden md:flex w-10 h-10 rounded-full border border-amber-500 text-amber-600 items-center justify-center hover:bg-amber-500 hover:text-white transition shadow-sm bg-white/70 backdrop-blur"
            aria-label="Next testimonial"
          >
            ❯
          </button>
        </div>

        {/* Mobile navigation below cards */}
        <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-amber-500 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-white transition shadow-sm bg-white/80 backdrop-blur"
            aria-label="Previous testimonial"
          >
            ❮
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-amber-500 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-white transition shadow-sm bg-white/80 backdrop-blur"
            aria-label="Next testimonial"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
