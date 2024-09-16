import Link from 'next/link';

export default function RoutesMenu({ selected, cssClasses }){
    return(

        <ul className={cssClasses}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/education">Education</Link></li>
            <li><Link href="/work-experience">Work Experience</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
        </ul>
    )
}