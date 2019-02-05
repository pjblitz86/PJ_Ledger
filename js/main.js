function initMap() {
  const loc = { lat: 54.898521, lng: 23.903597 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 13,
    center: loc
  });

  const maker = new google.maps.Marker({ position: loc, map: map });
}
