function CustomerForm() {
  return (<div className="bg-white rounded-xl p-4 shadow-sm">
     <h2 className="text-lg font-semibold mb-4">
        Customer information
      </h2>

      <div className="space-y-3">

        <div>
          <label className="block mb-2 font-medium">
            Customer Name
          </label>

          <input
            type="text"
            placeholder="Enter customer name"
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Mobile Number
          </label>

          <input
            type="text"
            placeholder="+91 98765 43210"
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Ticket Type
          </label>

          <select className="w-full border rounded-lg p-2 text-sm">
            <option>Select ticket type</option>
            <option>Critical</option>
            <option>not Critical</option>
          
          </select>
        </div>

        <div className="flex gap-4">

          <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm hover:bg-gray-800">
            Save
          </button>

          

        </div>

      </div>

    </div>
  );
}

export default CustomerForm;