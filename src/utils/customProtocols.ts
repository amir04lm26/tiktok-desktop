import { protocol } from "electron";

export const registerProtocols = () => {
  // register protocols
  protocol.registerSchemesAsPrivileged([
    {
      scheme: "http",
      privileges: {
        standard: true,
        bypassCSP: true,
        allowServiceWorkers: true,
        supportFetchAPI: true,
        corsEnabled: true,
        stream: true,
      },
    },
    {
      scheme: "https",
      privileges: {
        standard: true,
        bypassCSP: true,
        allowServiceWorkers: true,
        supportFetchAPI: true,
        corsEnabled: true,
        stream: true,
      },
    },
    { scheme: "mailto", privileges: { standard: true } },
  ]);
};
