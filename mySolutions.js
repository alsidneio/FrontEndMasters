const _ = {}; // in the beginning there was the object

//============================================ implementing the _.each function=======================================================// 
_.each = (list,callback)=>
{
    if(Array.isArray(list))
    {
        for(var k = 0; k<list.length; k++)
        {
            callback(list[k],k,list);
        }
    }
    else
    {
     for(var key in list)
     {
        callback(list[key]);
     }   
    }
};
//================================== implementing the map function ======================================================================//

_.map = (list,callback)=>
{
    var returnArray=[];
   
    list.forEach((element)=> 
    {
        returnArray.push(callback(element))
        
    });
    
    return returnArray;
}
//================================================ _.map appliction ===========================================================//
var weapons = ["candlestick","lead pipe","Knife"];

_.map(weapons,(item)=>{
    console.log(`we have broken the ${item} so it cant be the murder weapon`);
});
//========================= implementing the _.filter function ================================================================================//

_.filter = (list,callback)=>
{
    var returnArr=[];
    _.each(list,(value,i, list)=>
    {
        if(callback(value)==true)
        {
            returnArr.push(value);
        }
    });

    return returnArr;
}

//===================================== _.filter application =======================================================================//
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

_.filter(videoData, (item)=>{return item.present});