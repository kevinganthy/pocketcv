"use client";

import QRCode from 'qrcode'
import React from "react";


export const QRCodeComp = () => {
    React.useEffect(() => {
        QRCode.toCanvas(document.getElementById('qrcode'), document.location.href)
    });

    return <canvas id="qrcode" className='rounded max-w-16 max-h-16 hidden print:block absolute top-0 right-0'></canvas>
};