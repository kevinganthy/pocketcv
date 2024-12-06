"use client";

import React from "react";

const handlePrint = () => {
    window.print();
}

export const PrintComp = () => {
    return <button 
            onClick={handlePrint} 
            className="bg-lime-600 hover:bg-white text-white hover:text-lime-600 font-bold py-1 px-4 text-s rounded mx-auto transition-colors print:hidden">
        Imprimer le CV
    </button>
};