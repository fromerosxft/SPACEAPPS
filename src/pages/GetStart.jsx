

import React from "react";

function GetStart() {
    return(
        <>
            <div id="getstart">


                <section className="relative bg-[url(/src/imgs/bg2.jpg)] bg-cover bg-center bg-no-repeat bg-grey-100">
                <div className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" ></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-300">
                        BUSCA

                        <strong className="block font-extrabold text-rose-700">
                        TU PROPÓSITO
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-xl sm:text-xl/relaxed text-gray-300">
                        En algún lugar, algo increíble está esperando a ser decubierto
                    </p>

                    <p className="mt-4 max-w-xl sm:text-xl/relaxed text-gray-400">
                        (Carl Sagan)
                    </p>

                    {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a href="#" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto" >
                        Get Started
                        </a>

                        <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" >
                        Learn More
                        </a>
                    </div> */}
                    </div>
                </div>
                </section>
            </div>
        </>
    );
}

export default GetStart;
