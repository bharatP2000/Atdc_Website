import React, { useEffect, useState } from "react";
import TestCard from "../components/TestCard";
// import axios from "../api/testApi";

const Tests = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      const res = await axios.get("/tests");
      setTests(res.data);
    };
    fetchTests();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Our Health Packages
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tests.map((test) => (
          <TestCard key={test._id} test={test} />
        ))}
      </div>
    </section>
  );
};

export default Tests;
