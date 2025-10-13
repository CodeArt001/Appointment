import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Service = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Haircut",
      duration: "30 mins",
      price: "$20",
    },
    {
      id: 2,
      name: "Shave",
      duration: "10 mins",
      price: "$10",
    },
    {
      id: 3,
      name: "Beard Trim",
      duration: "15 mins",
      price: "$15",
    },
  ]);
  const [serviceName, setServiceName] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  //   const [newService, setNewService] = useState([]);
  const [editService, setEditService] = useState("");
  const [editedData, setEditedData] = useState({
    name: "",
    duration: "",
    price: "",
  });

  const handleNewService = (e) => {
    e.preventDefault();
    if (!services.trim()) return;
    const newwService = {
      id: Date.now(),
      name: serviceName,
      duration: duration || "N/A",
      price: price || "N/A",
    };
    setServices((prev) => [...prev, newwService]);

    setServices("");
    setDuration("");
    setPrice("");
    setServiceName("");
  };

  const handleEditService = (item) => {
    setEditService(item.id);
    setEditedData({
      name: item.name || "",
      duration: item.duration || "",
      price: item.price || "",
    });
  };

  const handleSaveEdit = (id) => {
    setServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...editedData } : item))
    );
    setEditService(null);
  };
  const deleteService = (id) => {
    setServices((prev) => prev.filter((item) => item.id !== id));
  };

  //   const addService = [
  //     {
  //       id: 1,
  //       name: "Haircut",
  //       duration: "30 mins",
  //       price: "$20",
  //     },
  //     {
  //       id: 2,
  //       name: "Haircut",
  //       duration: "10 mins",
  //       price: "$20",
  //     },
  //     {
  //       id: 3,
  //       name: "Haircut",
  //       duration: "15 mins",
  //       price: "$20",
  //     },
  //   ];
  //   const service = [...addService, ...newService];
  return (
    <div>
      <div className="px-5">
        <h1 className="lg:text-4xl text-2xl font-bold ">Service</h1>

        <input
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          type="text"
          placeholder=" New Service"
          className="placeholder-white placeholder-opacity-100 absolute flex lg:justify-end lg:right-5 bg-gradient-to-b from-violet-700 to-purple-600 text-white px-2 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 lg:mt-0 mt-3 lg:w-0"
        />
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          type="text"
          placeholder="Duration (e.g. 30 mins)"
          className="border border-gray-400 rounded-lg p-2 lg:w-0  w-1/2 lg:ml-o ml-3  md:w-1/3 lg:mt-0 mt-16 "
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Price (e.g. $20)"
          className="border border-gray-400 rounded-lg p-2 lg:w-0 w-1/2 md:w-1/3 ml-3 lg:mt-0 mt-3"
        />
        <button
          onClick={handleNewService}
          className="mt-1 absolute flex justify-end right-5 bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Add
        </button>
        <div className="bg-white shadow rounded-lg py-3 mt-12 mb-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="shadow bg-white rounded-lg text-black p-4 m-4"
            >
              <div className="flex flex-row  items-center">
                <div>
                  {editService === item.id ? (
                    <div className="flex flex-col gap-2">
                      <input
                        value={editedData.name}
                        onChange={(e) =>
                          setEditedData({ ...editedData, name: e.target.value })
                        }
                        className="border border-gray-400 rounded p-1 text-black"
                      />
                      <input
                        value={editedData.duration}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            duration: e.target.value,
                          })
                        }
                        className="border border-gray-400 rounded p-1 text-black"
                      />
                      <input
                        value={editedData.price}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            price: e.target.value,
                          })
                        }
                        className="border border-gray-400 rounded p-1 text-black"
                      />
                      <button
                        onClick={() => handleSaveEdit(item.id)}
                        className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="font-bold lg:text-3xl text-sm">
                        {item.name}
                      </p>
                      <div className="flex gap-5 text-gray-600 mt-2">
                        <p>{item.duration}</p>
                        <p>{item.price}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  {editService !== item.id && (
                    <div
                      onClick={() => handleEditService(item)}
                      className="text-3xl cursor-pointer absolute right-16 lg:right-10 "
                    >
                      <MdEdit />
                    </div>
                  )}
                </div>
                {editService !== item.id && (
                  <MdDeleteForever
                    className=" absolute right-5 lg:right-20 text-3xl cursor-pointer text-red-600"
                    onClick={() => deleteService(item.id)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="bg-white shadow rounded-lg py-3 mt-14 mb-8 ">
          {allServices.map((item) => (
            <div
              key={item.id}
              className="shadow bg-white rounded-lg text-black p-4 m-4 "
            >
              <div className="flex flex-row justify-between items-center">
                <div className="bg-white rounded-lg g ">
                  <p className="font-bold lg:text-3xl text-sm">{item.name}</p>
                  <div className="flex gap-5 text-gray-600 mt-2">
                    <p>{item.duration}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
                <div
                  onClick={() => handleEditService(item.id)}
                  className="text-2xl"
                >
                  <MdEdit />
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Service;
