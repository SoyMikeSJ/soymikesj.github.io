function Read(path = "")
{
    const fs = require('fs');
    fs.readFile(path, 'utf-8', (err, inputD) => {
        if(err)
            console.log("ERROR");
        else
            return inputD.toString();
    });
}