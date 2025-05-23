const args= process.argv.slice(2);
const Best=args.length;
if (Best===0) {
    console.log('No argument');
} else if (Best===1){
    console.log('Argument found');
} else {
    console.log('Argument found')
}
