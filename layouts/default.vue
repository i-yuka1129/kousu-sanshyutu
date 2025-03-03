<template>
  <div>
		<Headerarea />
    <div class="flex">
			<Sidebararea />
      <div class="flex-1 bg-main-bg max-1520:ml-10">
        <slot />
      </div>
    </div>
    <!-- <Footerarea /> -->
  </div>
</template>