import CurlyBracketsLeft from '@/assets/curly-brackets-left.svg';
import CurlyBracketsRight from '@/assets/curly-brackets-right.svg';
import LinkedinLogo from '@/assets/linkedin.svg';
import GithubLogo from "@/assets/github.svg";
import EmailLogo from '@/assets/envelope-solid.svg';
import MessageImg from '@/assets/message.svg';
import Link from 'next/link';

export default function Footer(){
    return(
      <footer className="footer bg-neutral text-neutral-content p-10">
        <aside style={{display: 'flex', flexDirection: 'row'}}>
          <CurlyBracketsLeft className="fill-current" width={50} height={50}/>
          <p>
            Augusto Splett
            <br />
            Full Stack Developer
          </p>
          <CurlyBracketsRight className="fill-current" width={50} height={50}/>
        </aside>
        <nav>
          <h6 className="footer-title">Contact Me</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/augusto-msplett/" target='_blank' alt="linkedin logo">
              <LinkedinLogo className="fill-current" width={30} height={30} />
            </a>
 
            <a href="https://github.com/augustosplett" target='_blank'>
              <GithubLogo className="fill-current" width={30} height={30}/>    
            </a>

            <a href="mailto:augusto.splett@gmail.com">
              <EmailLogo className="fill-current" width={30} height={30}/>
            </a>

            <Link href="/contact-page">
              <MessageImg className="fill-current" width={30} height={30}/>
            </Link>
          </div>
        </nav>
      </footer>
    )
}