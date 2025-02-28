process.stdin.on('data',(opr)=>{
    const input = opr.toString().trim();

    if(input === 'quit'){
        process.exit(0);
    }

    try {
        const value= eval(input)
        console.log(`${value}`)
    } catch (exception) {
        console.log(`this is in Appropiate , use only digit ${exception}`)
    }

    process.stdout.write('Enter the digits here: ')
})
process.stdout.write('Enter the digits here: ')