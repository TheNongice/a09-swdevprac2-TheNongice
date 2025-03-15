import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";

export default function Reservations() {
    return (
        <main className="w-full flex flex-col items-center space-y-4">
            <div className="text-xl font-medium pt-3">Venue Booking</div>

            <div className="border-black border-2 w-fit p-5 rounded-lg">
                {/* Name */}
                <div className="w-full max-w-md space-y-2">
                    <div className="text-md text-left text-gray-600">Name</div>
                    <div className="bg-[#ffd2bc] rounded-lg px-10 py-2 space-y-2">
                        <TextField
                            name="Name-Lastname"
                            id="filled-basic"
                            variant="standard"
                            label="Name-Lastname"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Contact Number */}
                <div className="w-full max-w-md space-y-2">
                    <div className="text-md text-left text-gray-600">Contact Number</div>
                    <div className="bg-[#ffd2bc] rounded-lg px-10 py-2 space-y-2">
                        <TextField
                            name="Contact-Number"
                            id="filled-basic"
                            variant="standard"
                            label="Contact-Number"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Date and Location */}
                <div className="w-full max-w-md space-y-2">
                    <div className="text-md text-left text-gray-600">Date and Location</div>
                    <DateReserve />
                </div>

                {/* Button */}
                <button
                    name="Book Venue"
                    className="block rounded-md bg-[#fa616b] px-3 py-2 text-white shadow-sm hover:bg-[#a23c48] w-full mt-3"
                >
                    Book Venue
                </button>
            </div>

        </main>
    );
}
