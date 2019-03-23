<!-- *************************************************************************
	TEMPLATE
************************************************************************* -->

<template>
  <div class="containar">
    <!-- Header -->
    <header class="header">
      <h1 class="header__heading">SiteTitle</h1>
      <ul class="header__menu">
        <li class="menu__item"><a href="" class="menu__link">menu1</a></li>
        <li class="menu__item"><a href="" class="menu__link">menu1</a></li>
        <li class="menu__item"><a href="" class="menu__link">menu1</a></li>
        <li class="menu__item"><a href="" class="menu__link">menu1</a></li>
        <li class="menu__item"><a href="" class="menu__link">menu1</a></li>
      </ul>
    </header>

    <!-- Sidebar -->
    <aside class="sidebar">
      <section class="sidebar__widget">
        <h2 class="widget__heading">title</h2>
        <div class="widget__content">
          texttext
        </div>
      </section>
      <section class="sidebar__widget">
        <h2 class="widget__heading">title</h2>
        <div class="widget__content">
          texttext
        </div>
      </section>
    </aside>

    <!-- Main -->
    <main class="content">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <ul class="breadcrumb__list">
          <li class="list__item"><a href="" class="list__link">Home</a></li>
          <li class="list__item"><a href="" class="list__link">Page1</a></li>
          <li class="list__item"><a href="" class="list__link">Page2</a></li>
        </ul>
      </div>

      <!-- Page -->
      <div class="page">
        <nuxt />
      </div>
    </main>

    <footer class="footer">
      <p><small>&copy; 2019 sa2cie</small></p>
    </footer>
  </div>
</template>

<style lang="scss">
@import '@/assets/css/base.scss';
</style>
