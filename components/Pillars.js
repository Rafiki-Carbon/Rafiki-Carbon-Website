import React, { useState } from "react";
import Modal from "./Modal";
// framer motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

export default function Pillars() {
  const [selectedPillar, setSelectedPillar] = useState(null);
  const allPillars = [
    {
      name: "Predictability",
      description:
        "Our software offers predictability by providing corporations with a clear and reliable path to achieve their sustainability goals. Through data-driven insights and intelligent algorithms, users can confidently anticipate their carbon offset outcomes, ensuring their emission reduction targets are met efficiently.",
    },
    {
      name: "Security",
      description:
        "Security is at the core of our platform. We've implemented robust measures to safeguard transactions, user data, and sensitive information. By maintaining a secure environment, we empower our users to engage in carbon offsetting and renewable energy trading with confidence, free from concerns about data breaches or fraudulent activities.",
    },
    {
      name: "Traceability",
      description:
        "Traceability is key to establishing credibility and accountability. Our software meticulously traces the journey of each carbon offset transaction and renewable energy project. This ensures that users can verify the authenticity and impact of their actions, contributing to a more transparent and trustworthy ecosystem.",
    },
    {
      name: "Transparency",
      description:
        "Transparency is a fundamental value that we uphold. Our software provides users with open access to their carbon offset data, project information, and the renewable energy projects they support. This transparency fosters a deeper understanding of the positive environmental change they're driving, building trust and encouraging continued engagement.",
    },
    {
      name: "Availability",
      description:
        "Availability ensures a continuous flow of resources, vital for sustained progress. Our platform consistently offers a diverse range of Renewable Energy Certificates (RECs) and renewable energy projects. This availability ensures that users have ample options to support, enabling them to make meaningful contributions to a greener future.",
    },
  ];
  const openModal = (pillar) => {
    setSelectedPillar(pillar);
  };

  const closeModal = () => {
    setSelectedPillar(null);
  };
  return (
    <div className="pills py-8">
      <motion.div
        className="pillar text-center text-[#0072BB] text-[40px] font-bold"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        Core Pillars
      </motion.div>
      <Modal isOpen={selectedPillar !== null} onClose={closeModal}>
        {selectedPillar && (
          <>
            <h2 className="text-xl font-semibold mb-2">
              {selectedPillar.name}
            </h2>
            <p>{selectedPillar.description}</p>
          </>
        )}
      </Modal>
      <motion.div
        className="pillar-sub text-center text-[#808080] text-[26px] font-[600]"
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        Our software is underpinned by five core pillars
      </motion.div>

      <motion.div
        className="all-pills grid grid-cols-2 xl:flex justify-center items-center md:gap-28 my-16"
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {allPillars.map((item, index) => (
          <motion.div
            className="px-4 py-5 rounded-lg bg-[#98FF98] w-40 text-center hover:cursor-pointer"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255, 255, 255)",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            onClick={() => openModal(item)}
            key={index}
          >
            {item.name}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
