import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import lt from "@/lang/lt";

export default function Index({ users }) {
    return (
        <>
            <Head title="User Management" />
            <Navbar />
            <div className="min-h-screen bg-zinc-900 p-8">
                <h1
                    data-aos="fade-down"
                    className="text-3xl font-bold mb-6 text-white"
                >
                    {lt.userManagement}
                </h1>
                <table
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="w-full bg-white shadow-xl rounded-2xl overflow-hidden"
                >
                    <thead className="bg-gray-50 border-b border-gray-100 text-left">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {lt.name}
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {lt.surname}
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {lt.email}
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {lt.actions}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="border-t border-gray-100 hover:bg-gray-50/60 transition-colors"
                            >
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {user.surname}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={`/admin/users/${user.id}/edit`}
                                        className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
                                    >
                                        {lt.edit}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
