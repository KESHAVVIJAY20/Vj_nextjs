export default function AdminPage() {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3">left</div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3">right</div>
        </div>
    );
};
