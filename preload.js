const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  ipcSend: (channel) => ipcRenderer.send(channel),
});
