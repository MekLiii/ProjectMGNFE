/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly APIENDPOINT: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }