export const addressesAndFiles = [
  {
    address: "0x1000",
    fileName: "bitcoinSwitch.ino.bootloader.bin",
  },
  {
    address: "0x8000",
    fileName: "bitcoinSwitch.ino.partitions.bin",
  },
  {
    address: "0xE000",
    fileName: "boot_app0.bin",
  },
  {
    address: "0x10000",
    fileName: "bitcoinSwitch.ino.bin",
  },
];

export const configPath = "elements.json";

export const elements = [
  {
    name: "password",
    value: "ToTheMoon1",
    label: "Password for PoS AP WiFi",
    type: "text",
  },
  {
    name: "ssid",
    value: "",
    label: "WiFi SSID",
    type: "text",
  },
  {
    name: "wifipassword",
    value: "",
    label: "WiFi Password",
    type: "text",
  },
  {
    name: "socket",
    value: "",
    label: "LNURLDevice device string e.g. ws://legend.lnbits.com/api/v1/ws/abcdefghijklmnop",
    type: "text",
  },
  {
    name: "wallet",
    value: "",
    label:
      "Wallet ID from LNbits",
    type: "text",
  },
  {
    name: "threshold",
    value: "",
    label: "Payment amount to reach to trigger switch",
    type: "text",
  },
  {
    name: "thresholdPin",
    value: "",
    label: "Device GPIO pin to turn on when switch triggered",
    type: "text",
  },
  {
    name: "thresholdTime",
    value: "",
    label: "Period of time in milliseconds to turn switch on",
    type: "text",
  },
];
