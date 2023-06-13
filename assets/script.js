const go = new Go();
const WasmURL = "./assets/wasm.wasm";

if ("instantiateStreaming" in WebAssembly) {
	WebAssembly.instantiateStreaming(fetch(WasmURL), go.importObject)
	.then(obj => RunWasm(obj.instance));
} else {
	fetch(webkitURL)
	.then(resp => resp.arrayBuffer)
	.then(bytes => 
		WebAssembly.instantiate(bytes, go.importObject)
		.then(obj => RunWasm(obj.instance))
	)
}

function RunWasm(wasm) {
	go.run(wasm);
	command.addEventListener("input", ev => Search(command.value.trim().toUpperCase()));
}
