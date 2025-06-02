import FooterLink from "@/components/FooterLink";
import { footerLinks } from "@/utils/constants";
import { Copyright } from "lucide-react";

function Footer() {
  return (
    <footer
      role="footer"
      className="mt-auto bg-gray-50 py-10 text-center text-gray-800 shadow-lg dark:bg-slate-900 dark:text-gray-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <div className="overflow-hidden rounded-full">
              <video
                src={"/logo-video.mp4"}
                className="mx-auto h-40 w-40 rounded-full object-cover"
                width={100}
                height={100}
                autoPlay={true}
                muted
              />
            </div>
            <h2 className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent transition dark:from-blue-400 dark:to-indigo-300">
              Los Varela
            </h2>
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              Construyendo grandes experiencias juntos
            </p>
          </div>

          <div className="mx-auto flex flex-col gap-4 font-bold md:flex-row md:gap-8">
            {/*   Nav Links   */}
            {footerLinks.map((link) => (
              <FooterLink key={link.endpoint} {...link} />
            ))}
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between text-sm md:flex-row">
          <p className="text-gray-600 dark:text-gray-300">
            {<Copyright className="inline text-blue-500 dark:text-gray-300" />}{" "}
            {new Date().getFullYear()}{" "}
            <span className="font-bold text-blue-600 dark:text-gray-300">
              Los Varela
            </span>
            . Todos los derechos reservados.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a
              href="#"
              className="text-blue-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-200"
            >
              Términos y Condiciones
            </a>
            <a
              href="#"
              className="text-blue-600 transition-colors duration-300 hover:text-blue-600 dark:text-gray-200"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
