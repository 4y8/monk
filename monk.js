browser.storage.local.get(data => {
    console.log(data);
  if (data.blocked) {
      blocked = data.blocked;
      console.log(data.blocked);
      console.log(blocked.split("\n"));
      if (blocked.split("\n").includes(window.location.hostname)) {
          document.body.remove()
      }
  }
});
