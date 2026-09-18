const coding = ["js", "ruby", "cpp", "java"]
coding.forEach (function (val) {
    console.log(val);
    } )

    // coding.forEach( (item => {
    //     console.log(item);
        
    // }))

    // function printMe(item) {
    //     console.log(item);
        
    // }
    // coding.forEach(printMe);

    coding.forEach ( (item , index, arr) => {
        console.log(item, index, arr);
        
    })

    const mycoding = [

    {
        languageName: "Javascript",
        languagefilename: "js" },
        {
            languageName: "Java",
            languagefilename: "java"
        },
        {
            languageName: "Python",
            languagefilename: "py"
        }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
    
})