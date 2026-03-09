import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import lt from "@/lang/lt";

export default function Index() {
    return (
        <>
            <Head title="Administrator" />
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
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-8">
                        {lt.adminPanel}
                    </h1>

                    <div className="flex flex-col gap-3">
                        <Link
                            href="/admin/users"
                            className="block bg-gradient-to-r from-red-500 to-orange-400 text-white py-3 rounded-xl font-medium hover:opacity-90 transition shadow-md"
                        >
                            {lt.userManagement}
                        </Link>
                        <Link
                            href="/admin/conferences"
                            className="block bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
                        >
                            {lt.conferenceManagement}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
