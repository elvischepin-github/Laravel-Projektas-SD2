import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import ConferenceForm from "./Form";
import Navbar from "@/Components/Navbar";
import lt from "@/lang/lt";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        title: "",
        description: "",
        lecturers: "",
        date: "",
        time: "",
        address: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/admin/conferences");
    }

    return (
        <>
            <Head title="New Conference" />
            <Navbar />
            <div className="min-h-screen bg-zinc-900 p-8">
                <div
                    data-aos="fade-up"
                    className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl mx-auto"
                >
                    <h1 className="text-3xl font-bold mb-6">
                        {lt.newConference}
                    </h1>
                    <ConferenceForm
                        data={data}
                        setData={setData}
                        errors={errors}
                        onSubmit={handleSubmit}
                        processing={processing}
                        submitLabel={lt.create}
                    />
                </div>
            </div>
        </>
    );
}
