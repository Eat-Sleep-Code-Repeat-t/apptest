<template>
  <div>
    <div class="container">
    
        <div class="col"> 
          <h1 class="head text-white">Table</h1>
          <div class="background space">
            <table class="table table-bordered">
              <thead class="text-white">
                <tr class="table-row-head">
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Create</th>
                  <th scope="col">Operation</th>

                </tr>
              </thead>
              <tbody class="text-white">
                <tr class="table-row two">
                  <th scope="row">1</th>
                  <td>Любитель</td>
                  <td>100</td>
                  <td>2</td>
                  <td>Удалить</td>
                </tr>
                <tr class="table-row">
                  <th scope="row">2</th>
                  <td>Начинающий</td>
                  <td>300</td>
                  <td>2</td>
                  <td>Удалить</td>
                </tr>
                <tr class="table-row two">
                  <th scope="row">2</th>
                  <td>Профи</td>
                  <td>5000</td>
                  <td>0,5</td>
                  <td>Удалить</td>
                </tr>
                <tr class="table-row">
                  <th scope="row">2</th>
                  <td>Игрок</td>
                  <td>7000</td>
                  <td>1</td>
                  <td>Удалить</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>

.head {
  font-size: 4rem;
  margin-top: 80px;
  
}

.space { 
  margin-left: 70px;
  font-size: 2rem;
}

.background {
  background-color: #132933;
  border: solid 1px;
  border-radius: 10px;
  text-align: left;
  padding: 19px 20px;
}
</style>
