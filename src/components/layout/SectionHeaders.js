export default function SectionHeaders({subHeader,mainHeader}){
    return(
        <div className="text-center mb-4">
           <h3 className="uppercase text-gray-500 font-semibold leading-5">
            {subHeader}
            </h3>
           <h2 className="text-primary font-bold text-5xl italic">{mainHeader}</h2>
        </div>
    )
}