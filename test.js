console.log("Hello, world!");

// const { stdout } = process;

const { stdin, stdout } = process;

stdin.on("data", (data) => {
    stdout.write('='+data);
    let str = data;
    stdout.write("str="+str);
    let t = typeof str;
    stdout.write("t="+t);
    let st = str.toString();
    t = typeof st;
    stdout.write("t="+t);
    stdout.write("string="+st);
    


    if (st[0] === "!") {
        stdout.write("exit");
        process.exit();
    } else {
        stdout.write("retry");
        stdout.write(data);
     }
});

process.on("exit", () => stdout.write("Good luck learning Node.js!"));

stdout.write("Node.js");
