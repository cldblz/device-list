/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Server.ts":
/*!***********************!*\
  !*** ./src/Server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Server\": () => (/* binding */ Server)\n/* harmony export */ });\nclass Server {\n    constructor(_param) {\n        this._param = _param;\n        this.m_Counter = 1;\n        this.m_Devices = [];\n        this.m_FilterMode = \"none\";\n        this.m_FilteredDevices = this.m_Devices;\n        this.m_SortMode = \"none\";\n        document.getElementById(\"add_1\").onclick = () => {\n            this.AddDevices(1);\n        };\n        document.getElementById(\"add_10\").onclick = () => {\n            this.AddDevices(10);\n        };\n        document.getElementById(\"add_100\").onclick = () => {\n            this.AddDevices(100);\n        };\n        document.getElementById(\"add_1000\").onclick = () => {\n            this.AddDevices(1000);\n        };\n        document.getElementById(\"all_online\").onclick = () => {\n            for (var i = 0; i < this.m_Devices.length; i++) {\n                var device = this.m_Devices[i];\n                if (device.is_online != true) {\n                    device.is_online = true;\n                    this._param.device_updated_callback(device);\n                }\n            }\n        };\n        document.getElementById(\"all_offline\").onclick = () => {\n            for (var i = 0; i < this.m_Devices.length; i++) {\n                var device = this.m_Devices[i];\n                if (device.is_online != false) {\n                    device.is_online = false;\n                    this._param.device_updated_callback(device);\n                }\n            }\n        };\n        document.getElementById(\"random_online\").onclick = () => {\n            for (var i = 0; i < this.m_Devices.length; i++) {\n                var device = this.m_Devices[i];\n                const random_state = Math.random() > 0.5;\n                if (device.is_online != random_state) {\n                    device.is_online = random_state;\n                    this._param.device_updated_callback(device);\n                }\n            }\n        };\n        document.getElementById(\"all_update\").onclick = () => {\n            var update_list = [];\n            for (var i = 0; i < this.m_Devices.length; i++) {\n                var device = this.m_Devices[i];\n                var updated = false;\n                const random_state = Math.random() > 0.5;\n                const random_address = Math.floor(Math.random() * 511) + 1;\n                const random_mode = Math.floor(Math.random() * 15);\n                const change_label = Math.random() > 0.75;\n                if (device.is_online != random_state) {\n                    device.is_online = random_state;\n                    updated = true;\n                }\n                if (device.address != random_address) {\n                    device.address = random_address;\n                    updated = true;\n                }\n                if (device.mode_index != random_mode) {\n                    device.mode_index = random_mode;\n                    updated = true;\n                }\n                if (change_label) {\n                    device.label = \"Random Label \" + Math.floor(Math.random() * 1000);\n                    updated = true;\n                }\n                if (updated) {\n                    update_list.push(device);\n                }\n            }\n            for (var i = 0; i < update_list.length; i++) {\n                this._param.device_updated_callback(update_list[i]);\n            }\n        };\n        document.getElementById(\"first_10_update\").onclick = () => {\n            var update_list = [];\n            for (var i = 0; i < Math.min(this.m_Devices.length, 10); i++) {\n                var device = this.m_Devices[i];\n                var updated = false;\n                const random_state = Math.random() > 0.5;\n                const random_address = Math.floor(Math.random() * 511) + 1;\n                const random_mode = Math.floor(Math.random() * 15);\n                const change_label = Math.random() > 0.75;\n                if (device.is_online != random_state) {\n                    device.is_online = random_state;\n                    updated = true;\n                }\n                if (device.address != random_address) {\n                    device.address = random_address;\n                    updated = true;\n                }\n                if (device.mode_index != random_mode) {\n                    device.mode_index = random_mode;\n                    updated = true;\n                }\n                if (change_label) {\n                    device.label = \"Random Label \" + Math.floor(Math.random() * 1000);\n                    updated = true;\n                }\n                if (updated) {\n                    update_list.push(device);\n                }\n            }\n            for (var i = 0; i < update_list.length; i++) {\n                this._param.device_updated_callback(update_list[i]);\n            }\n        };\n        document.getElementById(\"first_100_update\").onclick = () => {\n            var update_list = [];\n            for (var i = 0; i < Math.min(this.m_Devices.length, 100); i++) {\n                var device = this.m_Devices[i];\n                var updated = false;\n                const random_state = Math.random() > 0.5;\n                const random_address = Math.floor(Math.random() * 511) + 1;\n                const random_mode = Math.floor(Math.random() * 15);\n                const change_label = Math.random() > 0.75;\n                if (device.is_online != random_state) {\n                    device.is_online = random_state;\n                    updated = true;\n                }\n                if (device.address != random_address) {\n                    device.address = random_address;\n                    updated = true;\n                }\n                if (device.mode_index != random_mode) {\n                    device.mode_index = random_mode;\n                    updated = true;\n                }\n                if (change_label) {\n                    device.label = \"Random Label \" + Math.floor(Math.random() * 1000);\n                    updated = true;\n                }\n                if (updated) {\n                    update_list.push(device);\n                }\n            }\n            for (var i = 0; i < update_list.length; i++) {\n                this._param.device_updated_callback(update_list[i]);\n            }\n        };\n        document.getElementById(\"random_update_50\").onclick = () => {\n            var update_list = [];\n            for (var i = 0; i < this.m_Devices.length; i++) {\n                if (Math.random() > 0.5)\n                    continue;\n                var device = this.m_Devices[i];\n                var updated = false;\n                const random_state = Math.random() > 0.5;\n                const random_address = Math.floor(Math.random() * 511) + 1;\n                const random_mode = Math.floor(Math.random() * 15);\n                const change_label = Math.random() > 0.75;\n                if (device.is_online != random_state) {\n                    device.is_online = random_state;\n                    updated = true;\n                }\n                if (device.address != random_address) {\n                    device.address = random_address;\n                    updated = true;\n                }\n                if (device.mode_index != random_mode) {\n                    device.address = random_mode;\n                    updated = true;\n                }\n                if (change_label) {\n                    device.label = \"Random Label \" + Math.floor(Math.random() * 1000);\n                    updated = true;\n                }\n                if (updated) {\n                    update_list.push(device);\n                }\n            }\n            for (var i = 0; i < update_list.length; i++) {\n                this._param.device_updated_callback(update_list[i]);\n            }\n        };\n        document.getElementById(\"random_update_2\").onclick = () => {\n            var update_list = [];\n            for (var i = 0; i < this.m_Devices.length; i++) {\n                if (Math.random() > 0.02)\n                    continue;\n                var device = this.m_Devices[i];\n                var updated = false;\n                const random_state = Math.random() > 0.5;\n                const random_address = Math.floor(Math.random() * 511) + 1;\n                const random_mode = Math.floor(Math.random() * 15);\n                const change_label = Math.random() > 0.75;\n                if (device.is_online != random_state) {\n                    device.is_online = random_state;\n                    updated = true;\n                }\n                if (device.address != random_address) {\n                    device.address = random_address;\n                    updated = true;\n                }\n                if (device.mode_index != random_mode) {\n                    device.address = random_mode;\n                    updated = true;\n                }\n                if (change_label) {\n                    device.label = \"Random Label \" + Math.floor(Math.random() * 1000);\n                    updated = true;\n                }\n                if (updated) {\n                    update_list.push(device);\n                }\n            }\n            for (var i = 0; i < update_list.length; i++) {\n                this._param.device_updated_callback(update_list[i]);\n            }\n        };\n    }\n    GetDeviceCount() {\n        return this.m_Devices.length;\n    }\n    GetDeviceByIndex(index) {\n        return this.m_Devices[index];\n    }\n    AddDevices(count) {\n        for (var i = 0; i < count; i++) {\n            const na = Math.random() > 0.5;\n            this.m_Devices.push({\n                is_online: true,\n                uid: (na ? \"4E41\" : \"1AFA\") + this.m_Counter.toString(16).padStart(8, \"0\"),\n                uid_integer: BigInt((na ? 0x4e4100000000 : 0x1afa00000000) + this.m_Counter),\n                label: \"Device \" + this.m_Counter,\n                manufacturer: na ? \"Company NA\" : \"TMB\",\n                model: \"Test Device\",\n                mode_index: 1,\n                mode_count: 16,\n                address: 1,\n            });\n            this.m_Counter++;\n            if (this.m_FilterMode === \"na\" && na) {\n                this.m_FilteredDevices.push(this.m_Devices[this.m_Devices.length - 1]);\n            }\n            if (this.m_FilterMode === \"tmb\" && !na) {\n                this.m_FilteredDevices.push(this.m_Devices[this.m_Devices.length - 1]);\n            }\n            if (!(this.m_SortMode === \"uid\")) {\n                this.setSortMode(\"none\");\n            }\n            this._param.device_added_callback(this.m_Devices[this.m_Devices.length - 1]);\n        }\n    }\n    GetDeviceList() {\n        return this.m_Devices;\n    }\n    setLabelById(id, newLabel) {\n        this.m_Devices.find((device) => device.uid === id).label = newLabel;\n        if (this.m_FilteredDevices.some((device) => device.uid === id)) {\n            this.m_FilteredDevices.find((device) => device.uid === id).label =\n                newLabel;\n        }\n    }\n    setAdressById(id, newAddress) {\n        this.m_Devices.find((device) => device.uid === id).address = newAddress;\n        if (this.m_FilteredDevices.some((device) => device.uid === id)) {\n            this.m_FilteredDevices.find((device) => device.uid === id).address =\n                newAddress;\n        }\n    }\n    setModeById(id, newMode) {\n        this.m_Devices.find((device) => device.uid === id)[\"mode_index\"] = newMode;\n        if (this.m_FilteredDevices.some((device) => device.uid === id)) {\n            this.m_FilteredDevices.find((device) => device.uid === id)[\"mode_index\"] =\n                newMode;\n        }\n    }\n    getFilterMode() {\n        return this.m_FilterMode;\n    }\n    getFilteredDevices() {\n        return this.m_FilteredDevices;\n    }\n    setFilterMode(mode) {\n        this.m_FilterMode = mode;\n        switch (mode) {\n            case \"na\":\n                this.m_FilteredDevices = this.m_Devices.filter((device) => device.manufacturer === \"Company NA\");\n                break;\n            case \"tmb\":\n                this.m_FilteredDevices = this.m_Devices.filter((device) => device.manufacturer === \"TMB\");\n                break;\n            default:\n                this.m_FilteredDevices = this.m_Devices;\n        }\n    }\n    getSortMode() {\n        return this.m_SortMode;\n    }\n    setSortMode(mode) {\n        this.m_SortMode = mode;\n    }\n}\n\n\n//# sourceURL=webpack://webui/./src/Server.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Server */ \"./src/Server.ts\");\n\nwindow.onload = () => {\n    main();\n};\nvar g_Server;\nconst tbodyEl = document.getElementById(\"tbody\");\nconst listStateEl = document.getElementById(\"list-state\");\nfunction main() {\n    g_Server = new _Server__WEBPACK_IMPORTED_MODULE_0__.Server({\n        device_added_callback: (device_data) => {\n            createRowMarkup(device_data);\n            addRowEventListeners(device_data.uid);\n            setListState();\n            // Called when a new RDM Device has been discovered.\n            // Create an RDM Device entry in the RDM Device List with the values in device_data.\n            console.log(\"Add Device\", device_data);\n        },\n        device_updated_callback: (device_data) => {\n            // Called when an RDM Device parameter change is detected.\n            // Update existing associated RDM Device entry in the RDM Device List with the values in device_data.\n            console.log(\"Update Device\", device_data);\n        },\n    });\n    const updateBtns = [];\n    updateBtns.push(document.getElementById(\"all_offline\"));\n    updateBtns.push(document.getElementById(\"all_online\"));\n    updateBtns.push(document.getElementById(\"random_online\"));\n    updateBtns.push(document.getElementById(\"all_update\"));\n    updateBtns.push(document.getElementById(\"first_10_update\"));\n    updateBtns.push(document.getElementById(\"first_100_update\"));\n    updateBtns.push(document.getElementById(\"random_update_50\"));\n    updateBtns.push(document.getElementById(\"random_update_2\"));\n    updateBtns.map((el) => {\n        el.addEventListener(\"click\", () => updateTable());\n    });\n    const addBtns = [];\n    addBtns.push(document.getElementById(\"add_1\"));\n    addBtns.push(document.getElementById(\"add_10\"));\n    addBtns.push(document.getElementById(\"add_100\"));\n    addBtns.push(document.getElementById(\"add_1000\"));\n    addBtns.map((el) => {\n        el.addEventListener(\"click\", () => updateOnAdd());\n    });\n    document.getElementById(\"filter_none\").onclick = () => {\n        filter(\"none\");\n    };\n    document.getElementById(\"filter_na\").onclick = () => {\n        filter(\"na\");\n    };\n    document.getElementById(\"filter_tmb\").onclick = () => {\n        filter(\"tmb\");\n    };\n    document.getElementById(\"sort_uid\").onclick = () => {\n        sort(\"uid\");\n    };\n    document.getElementById(\"sort_address\").onclick = () => {\n        sort(\"address\");\n    };\n    document.getElementById(\"sort_manufacturer\").onclick = () => {\n        sort(\"manufacturer\");\n    };\n}\nfunction createRowMarkup(device) {\n    const { address, is_online, label, manufacturer, mode_count, mode_index, model, uid, } = device;\n    const uidModified = uid.slice(0, 4) + \":\" + uid.slice(4);\n    let optionsMarkup = \"\";\n    for (let i = 1; i <= mode_count; i++) {\n        if (i === mode_index) {\n            optionsMarkup += `<option value=\"${i}\" selected>${i}</option>`;\n            continue;\n        }\n        optionsMarkup += `<option value=\"${i}\">${i}</option>`;\n    }\n    const selectMarkup = `<select class=\"mode-input\" name=\"mode\">${optionsMarkup}</select>`;\n    const markup = `            <tr id=\"${uid}\" >\r\n              <td class=${is_online ? \"online\" : \"offline\"}></td>\r\n              <td  >${uidModified}</td>\r\n              <td class=\"label\"><input class=\"label-input\" type=\"text\" value=\"${label}\" /></td>\r\n              <td >${manufacturer}</td>\r\n              <td >${model}</td>\r\n              <td class=\"mode\">${selectMarkup}</td>\r\n              <td class=\"address\"><input class=\"address-input\" type=\"number\" min=\"1\" max=\"512\" value=\"${address}\" /></td>\r\n            </tr>\r\n`;\n    tbodyEl.insertAdjacentHTML(\"beforeend\", markup);\n}\nfunction labelInputCallback(event) {\n    const { target } = event;\n    const uid = target.parentElement.parentElement.id;\n    const newLabel = target.value;\n    g_Server.setLabelById(`${uid}`, newLabel);\n}\nfunction addressInputCallback(event) {\n    const { target } = event;\n    const uid = target.parentElement.parentElement.id;\n    const newAddress = Number(target.value);\n    if (newAddress < 1 || newAddress > 512) {\n        target.value = \"\";\n        alert(\"Please enter address 1 to 512\");\n        return;\n    }\n    g_Server.setAdressById(`${uid}`, newAddress);\n}\nfunction modeInputCallback(event) {\n    const { target } = event;\n    const uid = target.parentElement.parentElement.id;\n    const newMode = Number(target.value);\n    g_Server.setModeById(`${uid}`, newMode);\n}\nfunction addRowEventListeners(uid) {\n    const { labelInput, addressInput, modeInput } = getInputs(uid);\n    labelInput.addEventListener(\"change\", labelInputCallback);\n    addressInput.addEventListener(\"change\", addressInputCallback);\n    modeInput.addEventListener(\"change\", modeInputCallback);\n}\nfunction removeRowEventListeners(uid) {\n    const { labelInput, addressInput, modeInput } = getInputs(uid);\n    labelInput.removeEventListener(\"change\", labelInputCallback);\n    addressInput.removeEventListener(\"change\", addressInputCallback);\n    modeInput.removeEventListener(\"change\", modeInputCallback);\n}\nfunction getInputs(uid) {\n    const labelInput = document.getElementById(`${uid}`).children[2].children[0];\n    const addressInput = document.getElementById(`${uid}`).children[6];\n    const modeInput = document.getElementById(`${uid}`).children[5].children[0];\n    return { labelInput, addressInput, modeInput };\n}\nfunction createTableMarkup(deviceList) {\n    deviceList.map((device) => {\n        createRowMarkup(device);\n        addRowEventListeners(device.uid);\n    });\n}\nfunction clearTable() {\n    const devices = g_Server.getFilteredDevices();\n    const devicesUid = devices.map((device) => device.uid);\n    devicesUid.map(removeRowEventListeners);\n    tbodyEl.innerHTML = \"\";\n}\nfunction updateTable() {\n    clearTable();\n    g_Server.setSortMode(\"none\");\n    const devices = g_Server.getFilteredDevices();\n    createTableMarkup(devices);\n    setListState();\n}\nfunction updateOnAdd() {\n    if (g_Server.getFilterMode() === \"none\") {\n        return;\n    }\n    updateTable();\n}\nfunction setListState() {\n    const deviceCount = g_Server.GetDeviceCount();\n    const visibleCount = g_Server.getFilteredDevices().length;\n    const filterMode = g_Server.getFilterMode().toUpperCase();\n    const sortMode = g_Server.getSortMode().toUpperCase();\n    listStateEl.textContent = `RDM Device List (${visibleCount}/${deviceCount} |\r\n        ${filterMode} | ${sortMode})`;\n}\nfunction filter(mode) {\n    if (g_Server.getFilterMode() === mode) {\n        alert(\"Filtered devices are already shown\");\n        return;\n    }\n    g_Server.setSortMode(\"none\");\n    clearTable();\n    g_Server.setFilterMode(mode);\n    const filteredDevices = g_Server.getFilteredDevices();\n    createTableMarkup(filteredDevices);\n    setListState();\n}\nfunction sort(mode) {\n    if (g_Server.getSortMode() === mode) {\n        alert(`Devices are already sorted by ${mode}`);\n        return;\n    }\n    const sortedDevices = [...g_Server.getFilteredDevices()];\n    switch (mode) {\n        case \"uid\":\n            sortedDevices.sort((firstDevice, secondDevice) => firstDevice.uid\n                .substring(4)\n                .localeCompare(secondDevice.uid.substring(4)));\n            break;\n        case \"address\":\n            sortedDevices.sort((firstDevice, secondDevice) => firstDevice.address - secondDevice.address);\n            break;\n        case \"manufacturer\":\n            sortedDevices.sort((firstDevice, secondDevice) => firstDevice.manufacturer.localeCompare(secondDevice.manufacturer));\n            break;\n        default:\n            break;\n    }\n    clearTable();\n    createTableMarkup(sortedDevices);\n    g_Server.setSortMode(mode);\n    setListState();\n}\n\n\n//# sourceURL=webpack://webui/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;