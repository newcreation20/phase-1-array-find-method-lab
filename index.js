function superbowlWin(record) {
	const win = record.find(obj => obj.result == "W");
	return typeof win === 'undefined' ? undefined : win.year;
}

console.log(superbowlWin(record));




// function superbowlWin(collection){
//     for (const record of collection){
//         if (record.result === "W"){
//             console.log(result)
//         }
//     }
    
// }


