export function formatTests(tests, {
    filterOutDraft = true,
    sortByDate = true,
    limit = undefined,
} = {}){
    const filteredTests = tests.reduce((acc, test) => {
        const {Draft} = test.frontmatter;
        //filterOutDrafts if true
        if(filterOutDraft && Draft) return acc;

        //add game to acc
        acc.push(test)
        return acc;
    }, [])

    // sortyByDate or randomize
    if(sortByDate){
        filteredTests.sort((a, b) => new Date(b.frontmatter.
        testDate) - new Date(a.frontmatter.testDate))
    } 
    // else {
    //     filteredTests.sort(() => Math.random() - .5)
    // }

    // limit if number is passed
    if(typeof limit === "number"){
        return filteredTests.slice(0 , limit);
    }
    return filteredTests;
}

export function formatDate(date){
    return new Date(date).toLocaleDateString('en-UK', {
        timezone:'UTC',
    })
}