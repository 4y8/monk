blocked = await browser.storage.sync.get('blocked');
if (blocked.includes(window.location.hostname)) {
    document.body.remove()
}
