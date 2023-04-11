import { RDM_Device } from "./RDM_Device";
import { Server } from "./Server";

window.onload = () => {
  main();
};

var g_Server: Server;
const tbodyEl = document.getElementById("tbody");
const listStateEl = document.getElementById("list-state");

function main() {
  g_Server = new Server({
    device_added_callback: (device_data: RDM_Device) => {
      createRowMarkup(device_data);
      addRowEventListeners(device_data.uid);
      setListState();

      // Called when a new RDM Device has been discovered.
      // Create an RDM Device entry in the RDM Device List with the values in device_data.
      console.log("Add Device", device_data);
    },
    device_updated_callback: (device_data: RDM_Device) => {
      // Called when an RDM Device parameter change is detected.
      // Update existing associated RDM Device entry in the RDM Device List with the values in device_data.
      console.log("Update Device", device_data);
    },
  });

  const updateBtns: HTMLElement[] = [];
  updateBtns.push(document.getElementById("all_offline"));
  updateBtns.push(document.getElementById("all_online"));
  updateBtns.push(document.getElementById("random_online"));
  updateBtns.push(document.getElementById("all_update"));
  updateBtns.push(document.getElementById("first_10_update"));
  updateBtns.push(document.getElementById("first_100_update"));
  updateBtns.push(document.getElementById("random_update_50"));
  updateBtns.push(document.getElementById("random_update_2"));
  updateBtns.map((el) => {
    el.addEventListener("click", () => updateTable());
  });

  const addBtns: HTMLElement[] = [];
  addBtns.push(document.getElementById("add_1"));
  addBtns.push(document.getElementById("add_10"));
  addBtns.push(document.getElementById("add_100"));
  addBtns.push(document.getElementById("add_1000"));
  addBtns.map((el) => {
    el.addEventListener("click", () => updateOnAdd());
  });

  document.getElementById("filter_none").onclick = () => {
    filter("none");
  };

  document.getElementById("filter_na").onclick = () => {
    filter("na");
  };

  document.getElementById("filter_tmb").onclick = () => {
    filter("tmb");
  };

  document.getElementById("sort_uid").onclick = () => {
    sort("uid");
  };

  document.getElementById("sort_address").onclick = () => {
    sort("address");
  };

  document.getElementById("sort_manufacturer").onclick = () => {
    sort("manufacturer");
  };
}

function createRowMarkup(device: RDM_Device) {
  const {
    address,
    is_online,
    label,
    manufacturer,
    mode_count,
    mode_index,
    model,
    uid,
  } = device;

  const uidModified: string = uid.slice(0, 4) + ":" + uid.slice(4);

  let optionsMarkup: string = "";

  for (let i = 1; i <= mode_count; i++) {
    if (i === mode_index) {
      optionsMarkup += `<option value="${i}" selected>${i}</option>`;
      continue;
    }
    optionsMarkup += `<option value="${i}">${i}</option>`;
  }

  const selectMarkup = `<select class="mode-input" name="mode">${optionsMarkup}</select>`;

  const markup: string = `            <tr id="${uid}" >
              <td class=${is_online ? "online" : "offline"}></td>
              <td  >${uidModified}</td>
              <td class="label"><input class="label-input" type="text" value="${label}" /></td>
              <td >${manufacturer}</td>
              <td >${model}</td>
              <td class="mode">${selectMarkup}</td>
              <td class="address"><input class="address-input" type="number" min="1" max="512" value="${address}" /></td>
            </tr>
`;
  tbodyEl.insertAdjacentHTML("beforeend", markup);
}

function labelInputCallback(event: Event) {
  const { target } = event;
  const uid = (target as HTMLInputElement).parentElement.parentElement.id;
  const newLabel = (target as HTMLInputElement).value;
  g_Server.setLabelById(`${uid}`, newLabel);
}

function addressInputCallback(event: Event) {
  const { target } = event;
  const uid = (target as HTMLInputElement).parentElement.parentElement.id;
  const newAddress = Number((target as HTMLInputElement).value);
  if (newAddress < 1 || newAddress > 512) {
    (target as HTMLInputElement).value = "";
    alert("Please enter address 1 to 512");
    return;
  }
  g_Server.setAdressById(`${uid}`, newAddress);
}

function modeInputCallback(event: Event) {
  const { target } = event;
  const uid = (target as HTMLInputElement).parentElement.parentElement.id;
  const newMode = Number((target as HTMLInputElement).value);
  g_Server.setModeById(`${uid}`, newMode);
}

function addRowEventListeners(uid: string) {
  const { labelInput, addressInput, modeInput } = getInputs(uid);
  labelInput.addEventListener("change", labelInputCallback);
  addressInput.addEventListener("change", addressInputCallback);
  modeInput.addEventListener("change", modeInputCallback);
}

function removeRowEventListeners(uid: string) {
  const { labelInput, addressInput, modeInput } = getInputs(uid);
  labelInput.removeEventListener("change", labelInputCallback);
  addressInput.removeEventListener("change", addressInputCallback);
  modeInput.removeEventListener("change", modeInputCallback);
}

function getInputs(uid: string) {
  const labelInput = document.getElementById(`${uid}`).children[2].children[0];
  const addressInput = document.getElementById(`${uid}`).children[6];
  const modeInput = document.getElementById(`${uid}`).children[5].children[0];
  return { labelInput, addressInput, modeInput };
}

function createTableMarkup(deviceList: Array<RDM_Device>) {
  deviceList.map((device) => {
    createRowMarkup(device);
    addRowEventListeners(device.uid);
  });
}

function clearTable() {
  const devices: Array<RDM_Device> = g_Server.getFilteredDevices();

  const devicesUid = devices.map((device) => device.uid);
  devicesUid.map(removeRowEventListeners);
  tbodyEl.innerHTML = "";
}

function updateTable() {
  clearTable();
  g_Server.setSortMode("none");

  const devices: Array<RDM_Device> = g_Server.getFilteredDevices();
  createTableMarkup(devices);
  setListState();
}

function updateOnAdd() {
  if (g_Server.getFilterMode() === "none") {
    return;
  }
  updateTable();
}

function setListState() {
  const deviceCount = g_Server.GetDeviceCount();
  const visibleCount = g_Server.getFilteredDevices().length;
  const filterMode = g_Server.getFilterMode().toUpperCase();
  const sortMode = g_Server.getSortMode().toUpperCase();

  listStateEl.textContent = `RDM Device List (${visibleCount}/${deviceCount} |
        ${filterMode} | ${sortMode})`;
}

function filter(mode: string) {
  if (g_Server.getFilterMode() === mode) {
    alert("Filtered devices are already shown");
    return;
  }
  g_Server.setSortMode("none");
  clearTable();

  g_Server.setFilterMode(mode);
  const filteredDevices = g_Server.getFilteredDevices();

  createTableMarkup(filteredDevices);
  setListState();
}

function sort(mode: string) {
  if (g_Server.getSortMode() === mode) {
    alert(`Devices are already sorted by ${mode}`);
    return;
  }

  const sortedDevices: Array<RDM_Device> = [...g_Server.getFilteredDevices()];
  switch (mode) {
    case "uid":
      sortedDevices.sort((firstDevice, secondDevice) =>
        firstDevice.uid
          .substring(4)
          .localeCompare(secondDevice.uid.substring(4))
      );
      break;

    case "address":
      sortedDevices.sort(
        (firstDevice, secondDevice) =>
          firstDevice.address - secondDevice.address
      );
      break;

    case "manufacturer":
      sortedDevices.sort((firstDevice, secondDevice) =>
        firstDevice.manufacturer.localeCompare(secondDevice.manufacturer)
      );
      break;

    default:
      break;
  }

  clearTable();
  createTableMarkup(sortedDevices);
  g_Server.setSortMode(mode);
  setListState();
}
