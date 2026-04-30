"use client";
import Booking_API from "@/app/api/Booking";
import { useRequest } from "ahooks";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
const inputClass =
  "w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 border-none";

const selectClass =
  "w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 border-none appearance-none cursor-pointer";

const labelClass =
  "block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5";

const OCCASIONS = [
  "No special occasion",
  "Birthday",
  "Anniversary",
  "Business meal",
  "Date night",
];

// ── Types ──────────────────────────────────────────────
interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests?: string;
  onClose: () => void;
  onSuccess?: () => void;
}

interface BookingDetailCardProps {
  restaurantId: number;
  restaurantName: string;
  restaurantImg?: string;
  initialDate?: string;
  initialTime?: string;
  initialGuests?: number;
  time_slot: { time: string; available: boolean }[];
  onClose: () => void;
  onSuccess?: () => void;
}

// ── Component ──────────────────────────────────────────
const BookingDetailCard = ({
  restaurantId,
  restaurantName,
  restaurantImg,
  time_slot,
  initialDate,
  initialTime = "6:00 PM",
  initialGuests = 2,
  onClose,
  onSuccess,
}: BookingDetailCardProps) => {
  const today = new Date().toISOString().split("T")[0];
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: initialDate ?? today,
      time: initialTime,
      guests: initialGuests,
      occasion: "No special occasion",
      specialRequests: "",
    },
  });

  // watch header summary fields
  const [date, time, guests] = watch(["date", "time", "guests"]);

  const { run: createBooking, loading } = useRequest(
    Booking_API.createBooking,
    {
      manual: true,
      onSuccess: () => {
        onSuccess?.();
        onClose();
      },
      onError: (err: any) => {
        const message =
          err?.response?.data?.message ??
          "Something went wrong. Please try again.";
        setApiError(message);
      },
    },
  );

  const onSubmit = (form: FormValues) => {
    const payload = {
      restaurant_id: Number(restaurantId),
      first_name: form.firstName,
      last_name: form.lastName,
      phone: form.phone,
      email: form.email,
      booking_date: form.date,
      booking_time: form.time, // must be "19:00"
      party_size: Number(form.guests),
      duration_minutes: 90,
      special_requests: form.specialRequests || undefined,
    };

    console.log("✅ FINAL PAYLOAD:", payload);

    createBooking(payload);
  };
  useEffect(() => {
    reset({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: initialDate ?? today,
      time: initialTime,
      guests: initialGuests,
      occasion: "No special occasion",
      specialRequests: "",
    });
  }, [initialDate, initialTime, initialGuests]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        {/* <div className="flex flex-row gap-8 items-center bg-dark p-6">
          {restaurantImg && (
            <img
              src={restaurantImg}
              alt={restaurantName}
              className="w-30 h-30 rounded-lg object-cover"
            />
          )}
        </div> */}

        {/* ── Form ── */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-6">
          {/* YOUR DETAILS */}
          <section>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">👤</span>
              <h2 className="text-xl font-bold text-gray-900">Your Details</h2>
            </div>
            <hr className="border-gray-200 mb-5" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  {...register("firstName", { required: "Required" })}
                  placeholder="Sophea"
                  className={`${inputClass} ${errors.firstName ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  {...register("lastName", { required: "Required" })}
                  placeholder="Lim"
                  className={`${inputClass} ${errors.lastName ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  {...register("phone", {
                    required: "Required",
                    minLength: { value: 8, message: "Invalid phone number" },
                  })}
                  type="tel"
                  placeholder="+855 12 345 678"
                  className={`${inputClass} ${errors.phone ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email",
                    },
                  })}
                  type="email"
                  placeholder="sophea@email.com"
                  className={`${inputClass} ${errors.email ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* RESERVATION DETAILS */}
          <section>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📅</span>
              <h2 className="text-xl font-bold text-gray-900">
                Reservation Details
              </h2>
            </div>
            <hr className="border-gray-200 mb-5" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Date</label>
                <input
                  {...register("date", { required: "Required" })}
                  type="date"
                  min={today}
                  className={`${inputClass} ${errors.date ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.date && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>Time</label>
                <div className="relative">
                  <select {...register("time")} className={selectClass}>
                    {time_slot.map((t) => (
                      <option key={t.time} value={t.time}>
                        {t.time}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    ▾
                  </span>
                </div>
              </div>

              <div>
                <label className={labelClass}>Number of Guests</label>
                <div className="relative">
                  <select
                    {...register("guests", { valueAsNumber: true })}
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

              <div>
                <label className={labelClass}>Occasion (Optional)</label>
                <div className="relative">
                  <select {...register("occasion")} className={selectClass}>
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

            <div className="mt-4">
              <label className={labelClass}>Special Requests (Optional)</label>
              <textarea
                {...register("specialRequests")}
                placeholder="Allergies, seating preferences, high chair needed, etc."
                rows={4}
                className={`${inputClass} resize-y`}
              />
            </div>
          </section>

          {/* API error */}
          {apiError && (
            <p className="text-sm text-red-500 text-center -mt-4">{apiError}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #E8440A, #FF6B35)" }}
          >
            {loading ? "Confirming..." : "Confirm Reservation →"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingDetailCard;
