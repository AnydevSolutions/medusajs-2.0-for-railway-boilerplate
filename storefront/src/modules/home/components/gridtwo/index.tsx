import React from 'react'
import Certificated from '../icons/certificated'
import Delivery from '../icons/delivery'
import Chat from '../icons/chat'
import Cart from '../icons/cart'

const GridTwo = () => {
    return (
        <section className=' relative w-full h-full mt-10'>
            <div className="absolute inset-0 -z-10 overflow-hidden ">
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
                    <svg x="50%" y={-1} className="overflow-visible fill-white">
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
                    Mejores<span className="gradient-text"> Beneficios</span>. 
                </h2>
                
            </div>
            
            <div className="px-4 gap-y-12 gap-x-8 grid grid-cols-1 max-w-3xl mx-auto 
                                lg:gap-y-16 lg:grid-cols-2 lg:max-w-none py-12">
                {/* card 1 */}
                <div className="">
                    <div className='flex'>
                        <div className='sm:flex-shrink-0'>
                            <div className='flow-root'>
                                <Certificated width={90} />
                            </div>

                        </div>


                        <div className='mt-3 sm:mt-0 sm:ml-3'>
                            <h3 className="text-gray-900 font-medium text-sm leading-5 m-0">
                            Pago seguro
                            </h3>
                            <p className="text-gray-500 text-sm leading-5 mt-2">
                            Tus pagos están protegidos y encriptados, tu dinero siempre estará seguro hasta que finalice tu desarrollo.
                            </p>




                        </div>

                    </div>

                </div>

                {/* card 2 */}
                <div className="">
                    <div className='flex'>
                        <div className='sm:flex-shrink-0'>
                            <div className='flow-root'>
                                <Delivery width={90} />
                            </div>

                        </div>


                        <div className='mt-3 sm:mt-0 sm:ml-3'>
                            <h3 className="text-gray-900 font-medium text-sm leading-5 m-0">
                            Implementación inmediata

                            </h3>
                            <p className="text-gray-500 text-sm leading-5 mt-2">
                            Elige el desarrollo flash y tu sitio web estará listo en menos de 6 días.
                            </p>




                        </div>

                    </div>

                </div>


                {/* card 3 */}
                <div className="">
                    <div className='flex'>
                        <div className='sm:flex-shrink-0'>
                            <div className='flow-root'>
                                <Chat width={90} />
                            </div>

                        </div>


                        <div className='mt-3 sm:mt-0 sm:ml-3'>
                            <h3 className="text-gray-900 font-medium text-sm leading-5 m-0">
                            Soporte técnico
                            </h3>
                            <p className="text-gray-500 text-sm leading-5 mt-2">
                            Recibe 1 més gratis de soporte técnico para tu sitio web o e-commerce
                            </p>




                        </div>

                    </div>

                </div>


                {/* card 4 */}
                <div className="">
                    <div className='flex'>
                        <div className='sm:flex-shrink-0'>
                            <div className='flow-root'>
                                <Cart width={90} />
                            </div>

                        </div>


                        <div className='mt-3 sm:mt-0 sm:ml-3'>
                            <h3 className="text-gray-900 font-medium text-sm leading-5 m-0">
                                Tienda Online
                            </h3>
                            <p className="text-gray-500 text-sm leading-5 mt-2">
                                Haz que tu sitio web procese pagos online de manera segura y fácil.
                            </p>




                        </div>

                    </div>

                </div>




            </div>

        </section>
    )
}

export default GridTwo