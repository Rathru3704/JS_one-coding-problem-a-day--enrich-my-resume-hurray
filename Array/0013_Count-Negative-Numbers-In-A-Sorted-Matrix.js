var countNegatives = function(grid) {
    let i = 0;
    
    var gridFlat = [].concat.apply([], grid);
    // Using the apply method of concat will just take the second parameter as an array
    
    for(item of gridFlat){
        if(item < 0){
            i++;
        }
    }
    
    // for(item of grid.flat(Infinity)){
    //     if(item < 0){
    //         i++;
    //     }
    // }
    // The flat method is not yet implemented in common browsers (only Chrome v69, Firefox Nightly and Opera 56)
    
    return i;
};

countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]);
// 8
countNegatives([[3,2],[1,0]]);
// 0
countNegatives([[1,-1],[-1,-1]]);
// 3
countNegatives([[-1]]);
// 1
/*
44 / 44 test cases passed.
Runtime: 56 ms
Memory Usage: 36.8 MB
*/