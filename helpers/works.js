// Helper function to reorder works
export const reorderWorks = (works) => {
    const happinessProgram = works.filter(work => work.works.title === "Happiness Program");
    const otherWorks = works.filter(work => work.works.title !== "Happiness Program");
    return [...otherWorks, ...happinessProgram];
}
