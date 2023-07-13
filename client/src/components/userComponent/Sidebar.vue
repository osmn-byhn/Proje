<script setup>
    
</script>

<template>
    
    <!--
    <nav class="closed" id="sidebarCollapse" @click="openSide">
        <ul>
            <li>
                <i class="bi bi-ui-radios-grid"></i>
                <span class="name">Dashboard</span>
            </li>
            <li>
                <i class="bi bi-basket2"></i>
                <span class="name">Orders</span>
            </li>
            <li>
                <i class="bi bi-receipt-cutoff"></i>
                <span class="name">Bills</span>
            </li>
            <li>
                <i class="bi bi-stack"></i>
                <span class="name">Products</span>
            </li>
            <li>
                <i class="bi bi-command"></i>
                <span class="name">Batch Command</span>
            </li>
            <li>
                <i class="bi bi-pie-chart-fill"></i>
                <span class="name">Report</span>
            </li>
            <li>
                <i class="bi bi-gear-wide-connected"></i>
                <span class="name">Settings</span>
            </li>
            <li>
                <i class="bi bi-shop"></i>
                <span class="name">Shops</span>
            </li>
        </ul>
    </nav>-->




    <div class="sidebar">
        
        <ul class="nav-list">
            <li class="nav-item">
                <a href="#">
                    <span class="nav-item__icon">
                      <i class="bi bi-ui-radios-grid"></i>
                    </span>
                    <span class="nav-item__text">Dashboard</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#">
                    <span class="nav-item__icon">
                      <i class="bi bi-basket2"></i>
                    </span>
                    <span class="nav-item__text">Orders</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#">
                    <span class="nav-item__icon">
                      <i class="bi bi-receipt-cutoff"></i>
                    </span>
                    <span class="nav-item__text">Bills</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#">
                    <span class="nav-item__icon">
                      <i class="bi bi-stack"></i>
                    </span>
                    <span class="nav-item__text">Products</span>
                </a>
            </li>


            <li class="nav-item">
                <a href="#">
                    <span class="nav-item__icon">
                      <i class="bi bi-command"></i>
                    </span>
                    <span class="nav-item__text">Batch Command</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#">
                    <span class="nav-item__icon">
                      <i class="bi bi-pie-chart-fill"></i>
                    </span>
                    <span class="nav-item__text">Reports</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#">
                    <span class="nav-item__icon">
                      <i class="bi bi-gear-wide-connected"></i>
                    </span>
                    <span class="nav-item__text">Settings</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#">
                    <span class="nav-item__icon">
                      <i class="bi bi-shop"></i>
                    </span>
                    <span class="nav-item__text">Shops</span>
                </a>
            </li>
        </ul>
        <ul class="nav-list">
            <li class="nav-item">
                <a href="#">
                    <span class="nav-item__icon avatar">J</span>
                    <span class="nav-item__text">
                        John Doe
                    </span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#">
                    <span class="nav-item__icon logout">
                      <i class="bi bi-box-arrow-right"></i>
                    </span>
                    <span class="nav-item__text">Logout</span>
                </a>
            </li>
        </ul>
    </div>
    
</template>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: #000;
  text-decoration: none;
}

body {
  font-family: "Roboto", sans-serif;
}

.sidebar {
  width: 4rem;
  height: 92vh;
  position: fixed;
  top: 8.3vh;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
  cursor: pointer;
  background: #e6d347;
  transition: 0.5s;
  overflow: hidden;
}

.sidebar:hover {
  width: 15rem;
}

.brand {
  text-align: center;
  font-size: 1.4rem;
  padding: 1rem 0;
  color: #000;
}

.brand:hover {
  background: #b5a73c;
}

.brand span {
  display: none;
}

.nav-list {
  list-style: none;
}

.nav-item {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item:hover {
  background: #b5a73c;
}

.nav-item a {
  position: relative;
  white-space: nowrap;
  display: flex;
  gap: 1rem;
}

.nav-item__icon {
  position: relative;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item__text {
  position: relative;
  display: none;
  font-size: 1em;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.avatar {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  font-weight: 700;
}

.logout {
  margin-left: 0.2rem;
}

.sidebar:hover .brand span {
  display: inline;  
}

.sidebar:hover .nav-item {
  justify-content: start;
}

.sidebar:hover .nav-item__text {
  display: flex;
  align-items: center;
}
    //@import '../../../public/userPublic/components/SideBar.scss'

    
</style>