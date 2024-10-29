export const Badge = ( { type, color, label } ) => {

 if(type == "outline") {
    return (
        <span className={`inline-flex items-center gap-x-1.5 py-1.5 px-2.5 rounded-md text-xs font-medium border border-${color}-500 text-${color}-500`}>{label}</span>
    )
 }  

 if (type == "soft") {
    return (
        <span className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-${color}-100 text-${color}-800 dark:bg-${color}-800/30 dark:text-${color}-500`}>{label}</span>
    )
 }
 return (
    <>
        <span className={`inline-flex items-center gap-x-1.5 py-1.5 px-2.5  rounded-md text-xs font-medium bg-${color}-500 text-white`}>{label}</span>
    </>
 )   

}