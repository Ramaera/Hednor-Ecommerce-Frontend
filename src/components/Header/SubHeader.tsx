"use client";

import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import categories from "./Categories";

const SubHeader = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [columns, setColumns] = useState(1);
  const containerRef = useRef(null);

  const handleMouseEnter = (index: any) => {
    setActiveCategory(index);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="bg-category-bg shadow-md">
      <div className="mx-auto  ">
        <div className="flex space-x-4 px-4  bg-gradient-to-r from-cyan-500 to-blue-400">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <button className="text-gray-700 hover:text-gray-900 flex items-center py-2 px-4">
                {category.title}
                <FaChevronDown className="ml-2" />
              </button>
              {activeCategory === index && (
                <div
                  ref={containerRef}
                  className="absolute left-0 mt-0 bg-slate-200 shadow-custom-dropdown rounded-lg w-[90vw] max-h-[80vh] overflow-auto">
                  <div
                    className="grid grid-flow-row auto-cols-fr gap-4 p-4"
                    style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex flex-col border-b last:border-b-0">
                        <h4 className="font-semibold text-gray-800 bg-gray-100 py-2 px-4">
                          {item.label}
                        </h4>
                        <ul className="py-1 space-y-1">
                          {item.subItems.map((subItem, subItemIndex) => (
                            <li
                              key={subItemIndex}
                              className="text-gray-600 hover:bg-subitem-hover py-2 px-4 cursor-pointer">
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
