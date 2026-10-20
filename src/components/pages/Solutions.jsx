import HomeCTA from "../mainhome/HomeCTA";
import SolutionsFAQ from "../mainsolutions/SolutionsFAQ";
import SolutionsGrid from "../mainsolutions/SolutionsGrid";
import SolutionsMain from "../mainsolutions/SolutionsMain";
import SolutionsMotion from "../mainsolutions/SolutionsMotion";

function Solutions (){
    return(
        <>
        <SolutionsMain />
        <SolutionsMotion />
        <SolutionsGrid />
        <SolutionsFAQ />
        <HomeCTA />
        </>
    )
}

export default Solutions;