
import { ArrowRightMini } from "@medusajs/icons"


const Hero: React.FC = () => {
  return (
    <section className="relative  w-full h-auto">
      <div className=" rounded-3xl pt-5 px-3 lg:px-8 items-center relative ">
        <div className="relative flex-1  rounded-2xl  mb-4 ">
          <div className="absolute translate-y-4 opacity-50 blur-[20px] scale-110 lg:opacity-80">
          <video autoPlay muted loop className="w-full h-[600px] object-cover hidden md:inline-block">
            {/* https://videos.pexels.com/video-files/28298935/12354535_1920_1080_30fps.mp4 */}
              <source
                src="https://videos.pexels.com/video-files/28298935/12354535_1920_1080_30fps.mp4" // Reemplaza con la URL de tu video
                type="video/mp4"
              />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
          <div className="relative overflow-hidden">
            {/* Video de fondo */}
            <video autoPlay muted loop className="w-full h-[600px] object-cover rounded-3xl ">
            {/* https://videos.pexels.com/video-files/28298935/12354535_1920_1080_30fps.mp4 */}
              <source
                src="https://videos.pexels.com/video-files/28298935/12354535_1920_1080_30fps.mp4" // Reemplaza con la URL de tu video
                type="video/mp4"
              />
              Tu navegador no soporta la reproducción de video.
            </video>

            {/* Texto superpuesto */}
            <div className="flex gap-3 w-full absolute bottom-16 left-10 text-white">
              <a
                href="https://facebook.com/anydev.dev"
                target="_blank"
                rel="noreferrer"
                className="bg-black/90  transition-colors hover:bg-black/80   p-2 rounded-full mb-2 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" strokeWidth="0" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://instagram.com/anydev.mx"
                target="_blank"
                rel="noreferrer"
                className="bg-black/90 -blur-sm transition-colors hover:bg-black/80  p-2 rounded-full mb-2 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
              </a>

              <a
                href="https://wa.me/+525622068949"
                target="_blank"
                rel="noreferrer"
                className="bg-black/90  transition-colors hover:bg-black/80  p-2 rounded-full mb-2 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z">
                  </path>
                </svg>
              </a>
            </div>

            {/* Contenido principal con overlay */}
            <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-11 absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-white z-10">
              <h1 className="text-5xl font-bold leading-tight mb-3 text-white">
                Anydev Solutions
              </h1>
              <h1 className="md:hidden text-md font-semibold mb-3  gap-1  flex items-center  rounded-3xl max-w-[300px]">Soluciones profesionales
              <span className="w-2 h-2 bg-green-500 rounded-full blink"></span>

              </h1>
              <p className="mb-6 text-md">
                Diseño Web, Sistemas, Programación e Identidad Corporativa.
              </p>
              <button className="flex gap-1 items-center bg-black placeholder:bg-black text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-transparent border-transparent border-[1px] hover:border-white transition">
                Contacto <ArrowRightMini />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
