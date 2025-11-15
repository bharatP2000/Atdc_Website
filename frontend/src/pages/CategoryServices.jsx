import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./CategoryServices.css";

const CategoryServices = () => {
  const location = useLocation();
  const selectedCategory = location.state?.selectedCategory;

  const [services, setServices] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDummyData();
  }, []);

  useEffect(() => {
    filterData(search);
  }, [search, services]);

  // const loadDummyData = () => {
  //   const dummy = [
  //     {
  //       _id: "1",
  //       name: "Complete Blood Count (CBC)",
  //       category: "Blood Tests",
  //       price: 300,
  //       subServices: [
  //         { name: "CBC - Basic", price: 300 },
  //         { name: "CBC - Advanced", price: 450 },
  //         { name: "CBC - Premium", price: 600 }
  //       ]
  //     },
  //     {
  //       _id: "2",
  //       name: "Lipid Profile",
  //       category: "Blood Tests",
  //       price: 500,
  //       subServices: [
  //         { name: "Lipid Basic", price: 500 },
  //         { name: "Lipid Extended", price: 700 }
  //       ]
  //     },
  //     {
  //       _id: "3",
  //       name: "X-Ray Chest",
  //       category: "Imaging",
  //       price: 300,
  //       subServices: [
  //         { name: "X-Ray Normal", price: 300 },
  //         { name: "X-Ray Digital", price: 450 }
  //       ]
  //     },
  //     {
  //       _id: "4",
  //       name: "ECG Test",
  //       category: "Cardiology",
  //       price: 250,
  //       subServices: [
  //         { name: "ECG Basic", price: 250 },
  //         { name: "ECG 12 Lead", price: 400 }
  //       ]
  //     },
  //     {
  //       _id: "5",
  //       name: "Dental Cleaning",
  //       category: "Dental",
  //       price: 600,
  //       subServices: [
  //         { name: "Cleaning - Normal", price: 600 },
  //         { name: "Cleaning - Deep", price: 900 }
  //       ]
  //     },
  //     {
  //       _id: "6",
  //       name: "Lipids Test",
  //       category: "Blood Tests",
  //       description: "Cholesterol and fat analysis",
  //       price: 500,
  //       duration: 20,
  //       subServices: [
  //         { name: "Lipid - Standard", price: 500 },
  //         { name: "Lipid - Extended", price: 700 }
  //       ]
  //     },
  //     {
  //       _id: "7",
  //       name: "Lipid Test 2",
  //       category: "Blood Tests",
  //       description: "Cholesterol and fat analysis",
  //       price: 500,
  //       duration: 20,
  //       subServices: [
  //         { name: "Lipid - Standard", price: 500 },
  //         { name: "Lipid - Extended", price: 700 }
  //       ]
  //     },
  //     {
  //       _id: "7",
  //       name: "Lipid Test 2",
  //       category: "Blood Tests",
  //       description: "Cholesterol and fat analysis",
  //       price: 500,
  //       duration: 20,
  //       subServices: [
  //         { name: "Lipid - Standard", price: 500 },
  //         { name: "Lipid - Extended", price: 700 }
  //       ]
  //     },
      
  //   ];

  //   const categoryFiltered = dummy.filter(
  //     (s) => s.category === selectedCategory
  //   );

  //   setServices(categoryFiltered);
  //   setFiltered(categoryFiltered);
  // };


  const loadDummyData = () => {
    const dummy = [
      { _id: "1", name: "CBC (27 Tests)", category: "Blood Tests", description: "Complete blood count panel" },
      { _id: "2", name: "Lipid Profile (10 Tests)", category: "Blood Tests", description: "Cholesterol and lipid panel" },
      { _id: "3", name: "Kidney Function (3 Tests)", category: "Blood Tests", description: "Kidney performance evaluation" },
      { _id: "4", name: "Liver Function (11 Tests)", category: "Blood Tests", description: "Liver health assessment" },
      { _id: "5", name: "Routine Urine (14 Tests)", category: "Urine Test", description: "Complete urine analysis" },
      { _id: "6", name: "Glucose Fasting", category: "Blood Tests", description: "Fasting sugar level" },
      { _id: "7", name: "Glucose PP", category: "Blood Tests", description: "Post-meal glucose test" },
      { _id: "8", name: "Glucose Random", category: "Blood Tests", description: "Random blood glucose test" },
      { _id: "9", name: "HBA1C", category: "Blood Tests", description: "3-month average blood sugar" },
      { _id: "10", name: "T3", category: "Thyroid Test", description: "Triiodothyronine hormone test" },
      { _id: "11", name: "T4", category: "Thyroid Test", description: "Thyroxine hormone test" },
      { _id: "12", name: "TSH", category: "Thyroid Test", description: "Thyroid stimulating hormone test" },
      { _id: "13", name: "Vitamin B12", category: "Vitamin Test", description: "Vitamin B12 deficiency analysis" },
      { _id: "14", name: "Vitamin D3", category: "Vitamin Test", description: "Vitamin D3 status" },
      { _id: "15", name: "CRP", category: "Inflammation Marker", description: "C-reactive protein test" },
      { _id: "16", name: "ESR", category: "Inflammation Marker", description: "Erythrocyte sedimentation rate" },

      { _id: "17", name: "RA Factor", category: "Serology", description: "Rheumatoid arthritis factor test" },
      { _id: "18", name: "BT CT", category: "Blood Tests", description: "Bleeding time & clotting time" },
      { _id: "19", name: "Blood Grouping", category: "Blood Tests", description: "Blood type identification" },
      { _id: "20", name: "HIV", category: "Infectious Disease", description: "HIV screening test" },
      { _id: "21", name: "HBSAG", category: "Infectious Disease", description: "Hepatitis B surface antigen" },
      { _id: "22", name: "Micro Albumin", category: "Kidney Test", description: "Microalbumin urine test" },
      { _id: "23", name: "IGE", category: "Allergy Test", description: "Immunoglobulin-E allergy test" },
      { _id: "24", name: "PT INR", category: "Coagulation Test", description: "Blood clotting time test" },

      { _id: "25", name: "USG Whole Abdomen", category: "Imaging", description: "Ultrasound of whole abdomen" },
      { _id: "26", name: "ECG", category: "Cardiology", description: "Electrocardiogram heart test" },
      { _id: "27", name: "X-Ray", category: "Imaging", description: "General radiographic scan" },
      { _id: "28", name: "Audiometry", category: "Hearing Test", description: "Hearing ability analysis" },
      { _id: "29", name: "Echo Cardiogram", category: "Cardiology", description: "Ultrasound of heart" },
      { _id: "30", name: "TMT", category: "Cardiology", description: "Treadmill stress test" },
    ];


    const categoryFiltered = dummy.filter(
      (s) => s.category === selectedCategory
    );

    setServices(categoryFiltered);
    setFiltered(categoryFiltered);

    // setServices(dummy);
  };

  const filterData = (value) => {
    setSearch(value);

    if (!value.trim()) {
      setFiltered(services);
      return;
    }

    const match = services.filter((s) =>
      s.name.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(match);
  };

  return (
    <div className="category-wrapper">
      <h1 className="category-title">{selectedCategory}</h1>

      <input
        type="text"
        className="category-search"
        placeholder="Search Test..."
        value={search}
        onChange={(e) => filterData(e.target.value)}
      />

      <div className="category-grid">
        {filtered.map((service) => (
          <div className="service-card" key={service._id}>
            <h3>{service.name}</h3>
            {/* <p className="price">₹{service.price}</p> */}

            {/* <div className="subservice-list">
              {service.subServices.map((sub, i) => (
                <div key={i} className="sub-card">
                  <p className="sub-name">{sub.name}</p>
                  <p className="sub-price">₹{sub.price}</p>
                </div>
              ))}
            </div> */}

          </div>
        ))}

        {filtered.length === 0 && (
          <p className="no-result">No matching services...</p>
        )}
      </div>
    </div>
  );
};

export default CategoryServices;
