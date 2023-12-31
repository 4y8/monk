async function save_options(e) {
    e.preventDefault();
    await browser.storage.local.set({
        blocked: document.querySelector("#blocked").value
    });
}

async function restore_options() {
    let res = await browser.storage.local.get('blocked');
    document.querySelector("#blocked").value = res.blocked;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector("form").addEventListener("submit", save_options);
