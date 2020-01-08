const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const { autoUpdater } = require('electron-updater');
const {SystemConfig,getSystemConfig} =require('./renderer/general/systemConfig');
Menu.setApplicationMenu(null);
let systemData={};

let loginShown = false;
let mainWindow;
let loginWindow;
const si = require('systeminformation');

const bytesTOGB=(bytes)=>{
  const decimals=2
  const k = 1024;
  const dm = decimals <= 0 ? 0 : decimals ||2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return ( parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]);
}
const getSystemData=()=>{
  let os = require("os");
  const processorDet=os.cpus();
  let cpudetails={processor: processorDet[0]};  
  cpudetails={...cpudetails,RAM: bytesTOGB(os.totalmem())};
  si.diskLayout(data=>{
    cpudetails={...cpudetails,DiskSize:bytesTOGB(data[0].size)};
    systemData=cpudetails;
  });
 
  // console.log(cpudetails);

}
const showHomeWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.center();
  mainWindow.resizable = true;
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));
 
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  getSystemData();
}

const showLogin = () => {
  
  loginWindow = new BrowserWindow({
    width: 400,
    height: 280,
    webPreferences: {
      nodeIntegration: true
    },
    parent: mainWindow
  });

  loginWindow.resizable = false;
  loginWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'renderer', 'login.html'),
    protocol: 'file:',
    slashes: true,
    frame: false
  }));
  loginWindow.on('closed', () => {
    loginShown = false;
  });
}


app.on('ready', () => {
  showHomeWindow();
  autoUpdater.setFeedURL({
    provider: 'github',
    repo: "Elite-Gamer",
    owner: "Karthik7Nayak",
    token: "571997af1124622e668fe65e17db9f95962223fe "
  });
  // autoUpdater.checkForUpdatesAndNotify();
  // autoUpdater.checkForUpdates();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
});
app.on('activate', () => {
  if (mainWindow === null) {
    showHomeWindow();
  }
});


ipcMain.on('login-success', () => {
  loginWindow.close();
  loginShown = true;
  mainWindow.webContents.send('login-Success', '');
});

ipcMain.on('login-user', () => {
  if (loginShown === false) {
    showLogin();
    loginShown = true;

  }
});

ipcMain.on('show-system-config',()=>{
    // mainWindow.webContents.s
  si.graphics(data=>{
      console.log(data.controllers);
      systemData={...systemData,graphics:  data.controllers[0]};
      // mainWindow.webContents.send('system-config',cpudetails);
    console.log(systemData);
    mainWindow.webContents.send('system-config',systemData);

  });

});

ipcMain.on('logout-user', () => {
  loginShown = false;
});

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available');// sending message from main process to renderer process
});
autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
  console.log('restart app');
  autoUpdater.quitAndInstall();
});

const launchNewApp= (executablePath) =>{
  
  // execSync('cmd /k Spotify.exe');
  var child = require('child_process').execFile;
  // chrome.exe
  console.log(executablePath);
  child(executablePath, function(err, data) {
    if(err){
       console.error(err,'in err');
       return;
    }
    console.log(data.toString());
  });
  // cmd /k myprog.exe
}
ipcMain.on('launch-app',(event,args)=>{
  // args=args.replace(/([\/])/g, "\\/");
  console.log(args);
  // launchNewApp(args);
  const { execSync } = require('child_process');
  execSync('start '+args+'');
  mainWindow.webContents.send('launched-app',args);
});
ipcMain.on('launch-chrome',()=>{
  // let child = require('child_process').execFile;
  // console.log('exec file');
  // let exeFiles;
  executablePath="C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
  // executablePath="C:\\Users\\Interview\\AppData\\Local\\Microsoft\\WindowsApps\\Spotify.exe"
  launchNewApp(executablePath);
 
  const { execSync } = require('child_process');
  const exeFiles=execSync('where *.exe');
  console.log( exeFiles);
  // execSync('cmd /k Spotify.exe');
  // let list = execSync('wmic product get name,version');
  // console.log(list.toString());
  // console.log( exeFiles.toString());
  
  let data={
    listString: exeFiles.toString(),
    // list:list,
    exeFile:exeFiles
  };
  mainWindow.webContents.send('chrome-launched',data);

  // let which = require('which') 
  // which('Skype', function (er, resolvedPath) {
  //     console.log(resolvedPath);
  // })
  console.log('getting files ');

  // require('child_process').exec('psinfo-s', (error, stdout, stderror)=>{
  //     console.log(error,stderror);
  //     console.log('getting files with version')
  //     exeFiles=stdout; 
  //     console.log(stdout)
  //     mainWindow.webContents.send('chrome-launched',stdout);

  //   });
  
});

 // const { execSync } = require('child_process');
  // let list = execSync('wmic product get name,version');
  // console.log(list.toString());
  // console.log(list);
  
  // let data={
  //   listString: list.toString(),
  //   list:list
  // };
  /** */
  // require('child_process').exec('psinfo-s', (error, stdout, stderror)=>{
  //   console.log(error,stderror);
  //   console.log('getting files with version')
  //   exeFiles=stdout; 
  //   console.log(stdout)
  // });
  // launchNewApp(executablePath);
 