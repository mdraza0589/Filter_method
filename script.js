        //filter is used to print the data of object from array

        // const myNums = [1,2,3,4,5,6,7,8,9,10]

        // const newNums= myNums.filter((num)=> num>4)
        // console.log(newNums);

        const books=[
            {title:'book one',generation:'fiction',publish:1981, edition:2004},
            {title:'book two',generation:'non-fiction',publish:1990, edition:2000},
            {title:'book three',generation:'history',publish:2000, edition:2006},
            {title:'book fourth',generation:'science',publish:2001, edition:1992},
            {title:'book fifth',generation:'hitory',publish:2002, edition:1996},
            {title:'book sisth',generation:'math',publish:1995, edition:2005},
            {title:'book seven',generation:'fiction',publish:2005, edition:1900},
            {title:'book eighth',generation:'science',publish:1986, edition:1950}
        ]

        const store = books.filter(function (book){
            return book.generation==='history' && book.edition>=1950
        })
        console.log(store);
        