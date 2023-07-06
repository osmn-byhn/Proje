<script setup>
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
      document.getElementById('sidebar').classList.toggle('active');
    });
</script>

<template>
    <nav>
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
    </nav>
</template>

<style scoped lang="scss">
    @import '../../../public/userPublic/components/SideBar.scss'
</style>