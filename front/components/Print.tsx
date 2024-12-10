"use client";

import React from "react";

const handlePrint = () => {
    window.print();
}

export const PrintComp = () => {
    return <button 
            onClick={handlePrint} 
            className="bg-lime-700 hover:bg-white text-white hover:text-lime-700 font-bold py-1 px-4 text-s rounded transition-colors">
        Imprimer le CV
    </button>
};