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
      // Blood Tests - Basic
      { _id: "1", name: "CBC", category: "Blood Tests", description: "Complete blood count panel" },
      { _id: "2", name: "Lipid Profile Test", category: "Blood Tests", description: "Cholesterol and lipid panel" },
      { _id: "3", name: "Kidney Function Test", category: "Blood Tests", description: "Kidney performance evaluation" },
      { _id: "4", name: "Liver Function Test", category: "Blood Tests", description: "Liver health assessment" },
      { _id: "6", name: "Glucose Fasting", category: "Blood Tests", description: "Fasting sugar level" },
      { _id: "7", name: "Glucose PP", category: "Blood Tests", description: "Post-meal glucose test" },
      { _id: "8", name: "Glucose Random", category: "Blood Tests", description: "Random blood glucose test" },
      { _id: "9", name: "HBA1C", category: "Blood Tests", description: "3-month average blood sugar" },
      { _id: "18", name: "BT CT", category: "Blood Tests", description: "Bleeding time & clotting time" },
      { _id: "19", name: "Blood Grouping", category: "Blood Tests", description: "Blood type identification" },
      
      // Renal/Kidney Tests
      { _id: "31", name: "Renal Function Test", category: "Kidney Test", description: "Complete kidney function with Serum, Urea, Creatinine, BUN" },
      { _id: "22", name: "Micro Albumin", category: "Kidney Test", description: "Microalbumin urine test" },
      
      // Urine Tests
      { _id: "5", name: "Routine Urine (14 Tests)", category: "Urine Test", description: "Complete urine analysis" },
      { _id: "32", name: "Urine R/E", category: "Urine Test", description: "Urine routine and microscopy examination" },
      { _id: "33", name: "Urine Culture and Sensitivity", category: "Urine Test", description: "Bacterial culture and antibiotic sensitivity test" },
      
      // Thyroid Tests
      { _id: "10", name: "T3", category: "Thyroid Test", description: "Triiodothyronine hormone test" },
      { _id: "11", name: "T4", category: "Thyroid Test", description: "Thyroxine hormone test" },
      { _id: "12", name: "TSH", category: "Thyroid Test", description: "Thyroid stimulating hormone test" },
      { _id: "34", name: "Thyroid Profile", category: "Thyroid Test", description: "Complete thyroid panel (T3, T4, TSH)" },
      
      // Vitamin Tests
      { _id: "13", name: "Vitamin B-12", category: "Vitamin Test", description: "Vitamin B12 deficiency analysis" },
      { _id: "14", name: "Vitamin D-3", category: "Vitamin Test", description: "Vitamin D3 status" },
      
      // Inflammation Markers
      { _id: "15", name: "ESR", category: "Inflammation Marker", description: "Erythrocyte sedimentation rate" },
      
      // Serology & Infectious Disease
      { _id: "17", name: "RA Factor", category: "Serology", description: "Rheumatoid arthritis factor test" },
      { _id: "20", name: "HIV", category: "Infectious Disease", description: "HIV screening test" },
      { _id: "21", name: "HBSAG", category: "Infectious Disease", description: "Hepatitis B surface antigen" },
      
      // Allergy Tests
      { _id: "23", name: "IGE", category: "Allergy Test", description: "Immunoglobulin-E allergy test" },
      
      // Coagulation Tests
      { _id: "24", name: "PT INR", category: "Coagulation Test", description: "Blood clotting time test" },
      
      // Electrolytes & Minerals
      { _id: "35", name: "Serum Electrolytes", category: "Blood Tests", description: "Sodium, potassium, chloride levels" },
      { _id: "36", name: "Serum Calcium", category: "Blood Tests", description: "Blood calcium level test" },
      { _id: "37", name: "Serum Uric Acid Test", category: "Blood Tests", description: "Uric acid level for gout assessment" },
      
      // Blood Smear
      { _id: "38", name: "Peripheral Blood Smear", category: "Blood Tests", description: "Microscopic blood cell examination" },
      
      // Hormone Tests (Women's Health)
      { _id: "39", name: "FSH", category: "Hormone Test", description: "Follicle stimulating hormone test" },
      { _id: "40", name: "LH", category: "Hormone Test", description: "Luteinizing hormone test" },
      { _id: "41", name: "PRL", category: "Hormone Test", description: "Prolactin hormone test" },
      
      // Specialized Profiles
      { _id: "42", name: "Iron Profile", category: "Blood Tests", description: "Iron, TIBC, ferritin analysis" },
      { _id: "43", name: "Arthritis Profile", category: "Rheumatology", description: "Comprehensive arthritis markers panel" },
      
      // Imaging Tests
      { _id: "25", name: "USG Whole Abdomen", category: "Imaging", description: "Ultrasound of whole abdomen" },
      { _id: "27", name: "X-Ray Chest (PA-view)", category: "Imaging", description: "General radiographic scan" },
      
      // Cardiology Tests
      { _id: "26", name: "ECG", category: "Cardiology", description: "Electrocardiogram heart test" },
      { _id: "29", name: "Echo Cardiogram", category: "Cardiology", description: "Ultrasound of heart" },
      { _id: "30", name: "TMT", category: "Cardiology", description: "Treadmill stress test" },
      
      // Other Tests
      { _id: "28", name: "Audiometry", category: "Hearing Test", description: "Hearing ability analysis" },
      { _id: "44", name: "Dental Consultation", category: "Dental", description: "General dental checkup and consultation" },
    ];


    const categoryFiltered = selectedCategory === "All Tests" 
    ? dummy 
    : dummy.filter((s) => s.category === selectedCategory);

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
