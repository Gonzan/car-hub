import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => (
  <footer
    className="flex flex-col mt-5 border-t"
  >
    <div
      className="flex
        max-md:flex-col flex-wrap justify-between gap-5
        sm:px-16 px-6 py-10"
    >
      <div
        className="flex flex-col justify-start items-start gap-6"
      >
        <Image
          src="/logo.svg"
          alt="logo"
          width={116}
          height={16}
        />
       </div> 
      <div className="footer__links">
        {
          footerLinks.map(({title, links})=>(
            <div className="footer__link" key={title}>
              <h3 className="font-bold">
                {title}
              </h3>
              {links.map(({title:linkTitle,url:linkUrl})=>(
                
              <Link
                key={linkTitle}
                href={linkUrl}
                className="text-gray-500"
              >
                {linkTitle}
              </Link>
              ))}
            </div>
          ))
        }  
      </div>
    </div>
  </footer>
)

export default Footer
