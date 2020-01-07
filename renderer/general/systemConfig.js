const bytesTOGB=(bytes)=>{
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals ||2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return ( parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]);
}
const getGraphicsInfo=()=>{
    const si = require('systeminformation');
   
    si.graphics(data=>{
    console.log(data);
    return data;
    });
}
 const getSystemConfig = () =>{
    var os = require("os");
    var cpudetails={processor: os.cpus()};

    console.log(cpudetails);
  // console.log(os.totalmem());
    const decimals=2;
    const bytes=(os.totalmem());
    
    cpudetails={...cpudetails,RAM: bytesTOGB(bytes)};
    console.log(cpudetails);
    return cpudetails;
    // mainWindow.webContents.send('system-config',cpudetails);

   
}

