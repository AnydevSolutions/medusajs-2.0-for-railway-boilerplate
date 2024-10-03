import { BoltSolid } from "@medusajs/icons";
import Image from "next/image";
import Certificated from "../icons/certificated";

export default function About() {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Nuestro enfoque: Un lugar de trabajo que <span className="gradient-text">enriquece vidas</span> y aporta valor al mundo
                </h2>
                <p className="mt-4  leading-6 text-gray-500">
                    Conoce nuestros mejores beneficios
                </p>
            </div>

            {/* Statistics Cards */}
            <div className="flex flex-col gap-8 max-w-3xl mt-16 mx-auto 
                            lg:items-end lg:flex-row lg:max-w-none lg:mt-20 lg:ml-0 lg:mr-0">
                {/* Card 1 */}
                <div className="p-8 bg-gray-50 rounded-xl gap-y-8 gap-x-16 justify-between flex-col-reverse flex 
                                lg:items-start lg:flex-col lg:flex-none lg:max-w-none lg:w-72 
                                sm:items-end sm:flex-row-reverse sm:max-w-lg sm:w-3/4">
                    <p className="flex items-center text-gray-900 tracking-tight font-bold text-3xl leading-9 m-0">
                        Misión
                    </p>

                    <div className="lg:flex-none lg:w-auto sm:flex-shrink sm:w-80">
                        <p className="text-gray-900 tracking-tight font-semibold text-lg leading-7">
                            Clientes Satisfechos
                        </p>
                        <p className="text-gray-500 leading-7 text-base mt-2">
                            Nuestra misión es impulsar la innovación tecnológica mediante soluciones profesionales para ti y tu empresa.
                        </p>


                    </div>


                </div>
                {/* Card 2 */}
                <div className="p-8 bg-gray-900 rounded-xl gap-y-8 gap-x-16 justify-between flex-col-reverse flex 
                            lg:gap-y-[11rem] lg:items-start lg:flex-col lg:flex-[1_1_auto] lg:max-w-md lg:w-full 
                            sm:items-end sm:flex-row-reverse">
                    <p className="text-white tracking-tight font-bold text-3xl leading-9 flex-none">
                    Visión
                    </p>

                    <div className="lg:flex-none lg:w-auto sm:flex-shrink sm:w-80">
                        <p className="text-white tracking-tight font-semibold text-lg leading-7">
                            Técnica, compromiso y calidad
                        </p>
                        <p className="text-gray-400 leading-7 text-base mt-2">
                        Aspiramos a ser la primera opción para empresas que buscan avanzar en su transformación digital mediante soluciones creativas, eficientes y escalables.</p>


                    </div>

                </div>
                {/* Card 3 */}
                <div className="p-8 bg-indigo-600 rounded-xl gap-y-8 gap-x-16 justify-between flex-col-reverse flex 
                                lg:gap-y-28 lg:items-start lg:flex-col lg:flex-[1_1_auto] lg:max-w-none lg:w-full
                                sm:items-end sm:flex-row-reverse sm:max-w-3xl sm:w-11/12">
                    <p className="text-white tracking-tight font-bold text-3xl leading-9 flex-none">
                    Valores
                    </p>

                    <div className="lg:flex-none lg:w-auto sm:flex-shrink sm:w-80">
                        <p className="text-white tracking-tight font-semibold text-lg leading-7">
                        Soluciones de vanguardia
                        </p>
                        <p className="text-indigo-200 leading-7 text-base mt-2">
                        Innovación, Compromiso, Excelencia, Colaboración, Responsabilidad.</p>


                    </div>
                </div>



            </div>
        </section>
    );
}
