export default function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6">

      {/* الصورة */}
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

      {/* البيانات */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">اسم العميل</h2>
        <p className="text-gray-500">client@email.com</p>

        <span className="inline-block mt-2 px-3 py-1 text-sm bg-cyan-100 text-cyan-700 rounded-full">
          عميل نشط
        </span>
      </div>

    </div>
  );
}