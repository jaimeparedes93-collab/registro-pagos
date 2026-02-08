self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("pagos-v1").then(c=>c.addAll(["./","index.html"]))
  );
});
