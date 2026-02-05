export const uint8array_to_base64 = (uint8array: Uint8Array) => {
    let binary = "";
    const chunk_size = 0x8000;

    for (let index = 0; index < uint8array.length; index += chunk_size) {
        binary += String.fromCharCode(...uint8array.subarray(index, index + chunk_size));
    }

    return btoa(binary)
}
