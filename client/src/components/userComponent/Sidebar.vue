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
  @import '../../../public/userPublic/components/SideBar.scss'

    
</style>