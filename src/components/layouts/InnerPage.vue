<template>
	<div>
		<app-header></app-header>

		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	
		<app-footer></app-footer>
	</div>
</template>