import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import lt from "@/lang/lt";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex flex-col items-center justify-center p-6">
                <div
                    data-aos="fade-down"
                    className="bg-white rounded-3xl shadow-2xl p-12 max-w-sm w-full text-center"
                >
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-400 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <svg
                            className="w-7 h-7 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">
                        {lt.conferenceSystem}
                    </h1>
                    <p className="text-sm text-gray-500 mb-0.5">
                        Elvis Cepinskas
                    </p>
                    <p className="text-sm text-gray-400 mb-8">{lt.group}</p>

                    <div className="flex flex-col gap-3">
                        <Link
                            href="/client"
                            className="block bg-gradient-to-r from-red-500 to-orange-400 text-white py-3 rounded-xl font-medium hover:opacity-90 transition shadow-md"
                        >
                            {lt.client}
                        </Link>
                        <Link
                            href="/employee"
                            className="block bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
                        >
                            {lt.employee}
                        </Link>
                        <Link
                            href="/admin"
                            className="block bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
                        >
                            {lt.administrator}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
