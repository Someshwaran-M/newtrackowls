import HomeCTA from "../mainhome/HomeCTA";
import SolutionsFAQ from "../mainsolutions/SolutionsFAQ";
import SolutionsGrid from "../mainsolutions/SolutionsGrid";
import SolutionsMain from "../mainsolutions/SolutionsMain";

function Solutions (){
    return(
        <>
        <SolutionsMain />
        <SolutionsGrid />
        <SolutionsFAQ />
        <HomeCTA />
        </>
    )
}

export default Solutions;