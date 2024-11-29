<template>
  <view>
    <map class="map" :markers="markers" :longitude="longitude" :latitude="latitude"></map>
    <button @tap="search">周边美食</button>
  </view>
</template>

<script setup>
import { ref } from "vue";
const latitude = ref(30.320692);
const longitude = ref(120.343585);
const markers = ref([]);

//map
const search = () => {
  uni.request({
    url: "https://apis.map.qq.com/ws/place/v1/search?&boundary=nearby(30.320692,120.343585,5000,1)&keyword=美食&key=6SWBZ-2PRC3-DQJ34-OI2L2-OH77E-4WBTK",
    success(res) {
      const result = res.data;
      const pois = result.data;
      const allMarkers = [];

      for (let i = 0; i < pois.length; i++) {
        const {
          title,
          location: { lat, lng },
        } = pois[i];
        console.log(`${title},${lat},${lng}`);
        const marker = {
          id: i,
          latitude: lat,
          longitude: lng,
          width: 20,
          height: 30,
          callout: {
            content: title,
          },
        };
        allMarkers.push(marker);
      }

      latitude.value = allMarkers[0].latitude;
      longitude.value = allMarkers[0].longitude;
      markers.value = allMarkers;
    },
  });
};
</script>

<style lang="scss" scoped>
.map {
  width: 100vw;
  height: 80vh;
}
</style>
