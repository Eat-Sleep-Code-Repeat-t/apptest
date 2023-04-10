<template>
  <div class="header">
    <a
      class="btn btn-primary"
      data-bs-toggle="offcanvas"
      href="#offcanvasExample"
      role="button"
      aria-controls="offcanvasExample"
      ><svg
        width="30"
        height="26"
        viewBox="0 0 30 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="5.2" rx="2.6" fill="white"></rect>
        <rect y="10.3999" width="30" height="5.2" rx="2.6" fill="white"></rect>
        <rect
          y="20.8"
          width="30"
          height="5.2"
          rx="2.6"
          fill="white"
        ></rect></svg
    ></a>
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      Button with data-bs-target
    </button>
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </div>
        <div class="dropdown mt-3">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
