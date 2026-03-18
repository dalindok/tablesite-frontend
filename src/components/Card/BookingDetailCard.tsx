import { spec } from "node:test/reporters";
import React, { useState } from "react";

const TIME_SLOTS = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
];

const OCCASIONS = [
  "No Special Occasion",
  "Birthday",
  "Anniversary",
  "Date Night",
  "Business Meal",
  "Family Gathering",
  "Other",
];

const inputClass =
  "w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 border-none";

const selectClass =
  "w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 border-none appearance-none cursor-pointer";

const labelClass =
  "block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5";

interface ReservationFormProps {
  onSubmit?: (data: ReservationData) => void;
}

interface ReservationData {
  restaurantName: string;
  restaurantImg?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests: string;
}
interface BookingDetailCardProps {
  onClose: () => void;
  onSubmit?: (data: ReservationData) => void;
}
const BookingDetailCard = ({ onClose, onSubmit }: BookingDetailCardProps) => {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState<ReservationData>({
    restaurantName: "Mock Restaurant",
    restaurantImg: "/image/hotels/restaurant.jpg",
    firstName: "Test",
    lastName: "",
    phone: "",
    email: "",
    date: today,
    time: "6:00 PM",
    guests: 3,
    occasion: "No Special Occasion",
    specialRequests: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ReservationData, string>>
  >({});

  const update = (field: keyof ReservationData, value: string | number) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = () => {
    const e: Partial<Record<keyof ReservationData, string>> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (form.phone.trim().length < 8) e.phone = "Invalid phone number";
    if (!form.email.includes("@")) e.email = "Invalid email";
    if (!form.date) e.date = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit?.(form);
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs "
      onClick={onClose} // click outside to close>
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="flex flex-row gap-8 items-center bg-dark p-6">
          <img
            src={form.restaurantImg}
            alt={form.restaurantName}
            className="w-30 h-30 rounded-lg object-cover"
          />
          <div>
            <p className="font-bold text-xl text-white">
              {form.restaurantName}
            </p>
            <div className="flex flex-row gap-4">
              <p className="text-text-muted">{form.date} </p>
              <p className="text-text-muted">{form.time} </p>
              <p className="text-text-muted">{form.guests} Guests</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8 p-6">
          {/* ── YOUR DETAILS ── */}
          <section>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">👤</span>
              <h2 className="text-xl font-bold text-gray-900">Your Details</h2>
            </div>
            <hr className="border-gray-200 mb-5" />

            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  placeholder="Sophea"
                  className={`${inputClass} ${errors.firstName ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  placeholder="Lim"
                  className={`${inputClass} ${errors.lastName ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+855 12 345 678"
                  className={`${inputClass} ${errors.phone ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="sophea@email.com"
                  className={`${inputClass} ${errors.email ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
            </div>
          </section>

          {/* ── RESERVATION DETAILS ── */}
          <section>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📅</span>
              <h2 className="text-xl font-bold text-gray-900">
                Reservation Details
              </h2>
            </div>
            <hr className="border-gray-200 mb-5" />

            <div className="grid grid-cols-2 gap-4">
              {/* Date */}
              <div>
                <label className={labelClass}>Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className={`${inputClass} ${errors.date ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.date && (
                  <p className="text-xs text-red-500 mt-1">{errors.date}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className={labelClass}>Time</label>
                <div className="relative">
                  <select
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className={selectClass}
                  >
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    ▾
                  </span>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className={labelClass}>Number of Guests</label>
                <div className="relative">
                  <select
                    value={form.guests}
                    onChange={(e) => update("guests", Number(e.target.value))}
                    className={selectClass}
                  >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    ▾
                  </span>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className={labelClass}>Occasion (Optional)</label>
                <div className="relative">
                  <select
                    value={form.occasion}
                    onChange={(e) => update("occasion", e.target.value)}
                    className={selectClass}
                  >
                    {OCCASIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    ▾
                  </span>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="mt-4">
              <label className={labelClass}>Special Requests (Optional)</label>
              <textarea
                value={form.specialRequests}
                onChange={(e) => update("specialRequests", e.target.value)}
                placeholder="Allergies, seating preferences, high chair needed, etc."
                rows={4}
                className={`${inputClass} resize-y`}
              />
            </div>
          </section>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #E8440A, #FF6B35)" }}
          >
            Confirm Reservation →
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingDetailCard;
