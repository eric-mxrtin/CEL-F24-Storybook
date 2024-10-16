export const Badge = ( { type, color, label } ) => {

 if(type == "outline") {
    return (
        <span class={`inline-flex items-center gap-x-1.5 py-1.5 px-2.5 rounded-md text-xs font-medium border border-${color}-500 text-${color}-500`}>{label}</span>
    )
 }  

 if(type == "soft") {
    return (
        <span class={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-${color}-50 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500`}>{label}</span>
    )
 }

 return (
    <>
        <span class={`inline-flex items-center gap-x-1.5 py-1.5 px-2.5  rounded-md text-xs font-medium bg-${color}-500 text-white`}>{label}</span>
    </>
 )   

}