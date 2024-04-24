const http = require("node:http");

const server = http.createServer((req, res) => {
    const myUrl = new URL(req.url, "http://localhost:2000/");  //(url, base : if my url is not full)

    const path = myUrl.pathname; //  path = (/add)
    const operation = path.substring(1); // path = (add)
    
    const op1 = myUrl.searchParams.get('a');
    const op2 = myUrl.searchParams.get('b');

    if(operation != "add" && operation != "subtract" && operation != "multiply" && operation != "divide"){
        res.end("wrong operation!");
        return;
    }

    let ans;
    let a = parseFloat(op1);
    let b = parseFloat(op2);
    switch(operation){
        case "add":
            ans = a + b;
            break;

        case "subtract":
            ans = a - b;
            break;

        case "multiply":
            ans = a * b;
            break;

        case "divide":
            ans = a / b;
            break;
    }

    res.end(ans.toString());
});


server.listen(2000, () => {
    console.log("server is running....");
});