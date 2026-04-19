const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  checkVBCable: () => ipcRenderer.invoke('check-vbcable'),
  installVBCable: () => ipcRenderer.invoke('install-vbcable'),
});
