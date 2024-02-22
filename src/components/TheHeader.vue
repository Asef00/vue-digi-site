<template>
  <header class="flex justify-between">
    <img src="@/assets/logo.png" alt="logo" />

    <nav class="flex gap-1">
      <span class="icon-search"></span>
      <RouterLink to="/">خانه</RouterLink>
      <RouterLink :to="{ name: 'contact-us' }">ارتباط با ما</RouterLink>
      <RouterLink :to="{ name: 'about-us' }">درباره ما</RouterLink>
    </nav>

    <div class="grid gap-2">
      <button class="rounded-lg bg-primary-500">ثبت نام</button>
      <button class="rounded-lg text-primary-500">ورود</button>
    </div>
  </header>
</template>
